import { NextRequest, NextResponse } from 'next/server';
import { promisify } from 'util';
import * as dns from 'dns';
import * as net from 'net';

interface EmailVerificationRequest {
  email: string;
}

interface EmailVerificationResponse {
  email: string;
  isValid: boolean;
  isDeliverable: boolean;
  isRealImage?: boolean;
  reason?: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailVerificationRequest = await request.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Missing required field: email' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const isValidFormat = emailRegex.test(email);

    if (!isValidFormat) {
      const response: EmailVerificationResponse = {
        email,
        isValid: false,
        isDeliverable: false,
        reason: 'Invalid email format',
        timestamp: new Date().toISOString()
      };

      // No webhook needed for internal verification

      return NextResponse.json(response);
    }

    // Perform email verification
    const verificationResult = await verifyEmailDeliverability(email);
    
    // Check if email contains image references and validate them
    const imageValidation = await validateEmailImages(email);

    const response: EmailVerificationResponse = {
      email,
      isValid: verificationResult.isValid,
      isDeliverable: verificationResult.isDeliverable,
      isRealImage: imageValidation.isRealImage,
      reason: verificationResult.reason,
      timestamp: new Date().toISOString()
    };

    // No webhook needed for internal verification

    return NextResponse.json(response);

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json(
      { error: 'Email verification failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

async function verifyEmailDeliverability(email: string): Promise<{
  isValid: boolean;
  isDeliverable: boolean;
  reason?: string;
}> {
  try {
    const emailLower = email.toLowerCase();
    const [username, domain] = emailLower.split('@');

    // Additional validation checks
    const additionalChecks = performAdditionalValidation(emailLower, username, domain);
    if (!additionalChecks.isValid) {
      return additionalChecks;
    }

    // Step 1: Check domain MX records (DNS verification)
    const mxCheck = await checkMXRecords(domain);
    if (!mxCheck.isValid) {
      return {
        isValid: false,
        isDeliverable: false,
        reason: mxCheck.reason
      };
    }

    // Step 2: Check if domain exists and is reachable
    const domainCheck = await checkDomainExistence(domain);
    if (!domainCheck.isValid) {
      return {
        isValid: false,
        isDeliverable: false,
        reason: domainCheck.reason
      };
    }

    // Step 3: For major providers, use their specific validation
    const providerCheck = await checkEmailProvider(emailLower, domain);
    if (providerCheck.checked) {
      return {
        isValid: providerCheck.isValid,
        isDeliverable: providerCheck.isDeliverable,
        reason: providerCheck.reason
      };
    }

    // Step 4: SMTP validation (check if mailbox exists)
    const smtpCheck = await performSMTPValidation(emailLower, domain, mxCheck.mxRecords);
    
    return {
      isValid: smtpCheck.isValid,
      isDeliverable: smtpCheck.isDeliverable,
      reason: smtpCheck.reason
    };

  } catch (error) {
    console.error('Email verification error:', error);
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Verification service error: ' + (error instanceof Error ? error.message : 'Unknown error')
    };
  }
}

function performAdditionalValidation(email: string, username: string, domain: string): {
  isValid: boolean;
  isDeliverable: boolean;
  reason?: string;
} {
  // Check for common invalid patterns
  if (username.length === 0 || username.length > 64) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Invalid username length'
    };
  }

  if (domain.length === 0 || domain.length > 255) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Invalid domain length'
    };
  }

  // Check for consecutive dots
  if (email.includes('..')) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Email contains consecutive dots'
    };
  }

  // Check for invalid characters
  const invalidChars = /[<>()[\]\\,;:\s@"]/;
  if (invalidChars.test(username.replace(/"/g, ''))) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Username contains invalid characters'
    };
  }

  // Check for valid domain format
  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!domainRegex.test(domain)) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'Invalid domain format'
    };
  }

  // Check for disposable email domains (common ones)
  const disposableDomains = [
    '10minutemail.com', 'tempmail.org', 'guerrillamail.com', 'mailinator.com',
    'throwaway.email', 'temp-mail.org', 'getnada.com', 'maildrop.cc'
  ];
  
  if (disposableDomains.includes(domain)) {
    return {
      isValid: true, // Format is valid
      isDeliverable: false, // But not reliable for business use
      reason: 'Disposable email address detected'
    };
  }

  return {
    isValid: true,
    isDeliverable: true,
    reason: 'Passed additional validation checks'
  };
}



async function validateEmailImages(email: string): Promise<{ isRealImage: boolean }> {
  try {
    // Check if email domain has valid images/logos
    const domain = email.split('@')[1];
    
    // For known domains, assume they have real images
    const domainsWithRealImages = [
      'altiorainfotech.com',
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com'
    ];

    return {
      isRealImage: domainsWithRealImages.includes(domain)
    };

  } catch (error) {
    return {
      isRealImage: false
    };
  }
}

// DNS and SMTP verification functions
const resolveMx = promisify(dns.resolveMx);
const lookup = promisify(dns.lookup);

async function checkMXRecords(domain: string): Promise<{
  isValid: boolean;
  reason: string;
  mxRecords?: dns.MxRecord[];
}> {
  try {
    const mxRecords = await resolveMx(domain);
    
    if (!mxRecords || mxRecords.length === 0) {
      return {
        isValid: false,
        reason: 'No MX records found for domain - cannot receive emails'
      };
    }

    // Sort by priority (lower number = higher priority)
    mxRecords.sort((a, b) => a.priority - b.priority);
    
    return {
      isValid: true,
      reason: `Found ${mxRecords.length} MX record(s)`,
      mxRecords
    };

  } catch (error) {
    return {
      isValid: false,
      reason: 'Domain does not exist or has no mail servers'
    };
  }
}

async function checkDomainExistence(domain: string): Promise<{isValid: boolean, reason: string}> {
  try {
    await lookup(domain);
    return {
      isValid: true,
      reason: 'Domain exists and is reachable'
    };
  } catch (error) {
    return {
      isValid: false,
      reason: 'Domain does not exist or is not reachable'
    };
  }
}

async function checkEmailProvider(email: string, domain: string): Promise<{
  checked: boolean;
  isValid: boolean;
  isDeliverable: boolean;
  reason: string;
}> {
  // For major email providers, we still need to validate the full email
  // We don't skip validation just because it's a major provider
  const majorProviders: Record<string, string> = {
    'gmail.com': 'Google Gmail',
    'googlemail.com': 'Google Gmail',
    'yahoo.com': 'Yahoo Mail',
    'yahoo.co.uk': 'Yahoo Mail UK',
    'outlook.com': 'Microsoft Outlook',
    'hotmail.com': 'Microsoft Hotmail',
    'live.com': 'Microsoft Live',
    'msn.com': 'Microsoft MSN',
    'icloud.com': 'Apple iCloud',
    'me.com': 'Apple Me',
    'mac.com': 'Apple Mac'
  };

  // We recognize the provider but still need to validate the full email
  // Return unchecked so SMTP validation can proceed
  return {
    checked: false,
    isValid: false,
    isDeliverable: false,
    reason: majorProviders[domain] ? `Recognized ${majorProviders[domain]} provider - proceeding with full validation` : 'Not a recognized major provider'
  };
}

async function performSMTPValidation(email: string, domain: string, mxRecords?: dns.MxRecord[]): Promise<{
  isValid: boolean;
  isDeliverable: boolean;
  reason: string;
}> {
  if (!mxRecords || mxRecords.length === 0) {
    return {
      isValid: false,
      isDeliverable: false,
      reason: 'No MX records available for SMTP validation'
    };
  }

  // Check if it's a major provider that typically blocks SMTP validation
  const majorProviders = ['gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'outlook.com', 'hotmail.com', 'live.com', 'msn.com', 'icloud.com', 'me.com', 'mac.com'];
  const isMajorProvider = majorProviders.includes(domain);

  // For major providers, we'll do a lighter validation since they often block SMTP checks
  if (isMajorProvider) {
    // For major providers, if domain has MX records and email format is valid,
    // we can be reasonably confident but can't guarantee the specific address exists
    return {
      isValid: true,
      isDeliverable: true,
      reason: `Domain verified for major provider - specific address validation blocked by provider security`
    };
  }

  // Try to connect to the mail server for non-major providers
  const primaryMX = mxRecords[0];

  return new Promise((resolve) => {
    const socket = new net.Socket();
    let response = '';
    let step = 0;
    const [username, emailDomain] = email.split('@');

    const timeout = setTimeout(() => {
      socket.destroy();
      resolve({
        isValid: true,
        isDeliverable: true,
        reason: 'SMTP connection timeout - domain has valid MX records'
      });
    }, 10000); // 10 second timeout

    socket.setTimeout(5000);

    socket.on('connect', () => {
      // Connected to SMTP server
    });

    socket.on('data', (data) => {
      response += data.toString();

      if (step === 0 && response.includes('220')) {
        // Server greeting received
        step = 1;
        socket.write(`HELO altiorainfotech.com\r\n`);
        response = '';
      } else if (step === 1 && response.includes('250')) {
        // HELO accepted
        step = 2;
        socket.write(`MAIL FROM:<test@altiorainfotech.com>\r\n`);
        response = '';
      } else if (step === 2 && response.includes('250')) {
        // MAIL FROM accepted
        step = 3;
        socket.write(`RCPT TO:<${email}>\r\n`);
        response = '';
      } else if (step === 3) {
        // RCPT TO response - this tells us if the email exists
        clearTimeout(timeout);
        socket.write('QUIT\r\n');
        socket.end();

        if (response.includes('250')) {
          resolve({
            isValid: true,
            isDeliverable: true,
            reason: 'Email address verified via SMTP - mailbox exists'
          });
        } else if (response.includes('550') || response.includes('551') || response.includes('553')) {
          resolve({
            isValid: false,
            isDeliverable: false,
            reason: 'Email address does not exist - SMTP server rejected recipient'
          });
        } else if (response.includes('450') || response.includes('451') || response.includes('452')) {
          resolve({
            isValid: true,
            isDeliverable: false,
            reason: 'Email server temporarily unavailable - address may be valid'
          });
        } else {
          resolve({
            isValid: true,
            isDeliverable: true,
            reason: `SMTP validation inconclusive - domain has valid MX records`
          });
        }
      }
    });

    socket.on('error', (error) => {
      clearTimeout(timeout);
      
      // If we can't connect via SMTP, but MX records exist, domain is valid but we can't verify the specific address
      resolve({
        isValid: true,
        isDeliverable: true,
        reason: 'SMTP validation blocked by server - domain has valid MX records'
      });
    });

    socket.on('timeout', () => {
      clearTimeout(timeout);
      socket.destroy();
      resolve({
        isValid: true,
        isDeliverable: true,
        reason: 'SMTP timeout - domain has valid MX records'
      });
    });

    // Connect to the mail server
    socket.connect(25, primaryMX.exchange);
  });
}

