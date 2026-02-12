import nodemailer from 'nodemailer';

interface AutoReplyData {
  firstName: string;
  lastName?: string;
  email: string;
}

// Create transporter for Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
};

// Fetch email template from database
const getEmailTemplate = async (templateType: string = 'auto-reply') => {
  try {
    const adminPanelUrl = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3000';
    const response = await fetch(`${adminPanelUrl}/api/email-templates/active?type=${templateType}`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.success && data.template) {
        return data.template;
      }
    }
    
    // Fallback to default template if API fails
    return null;
  } catch (error) {
    return null;
  }
};

// Replace variables in template content
const replaceVariables = (content: string, data: any) => {
  let result = content;
  
  // Replace common variables
  result = result.replace(/{firstName}/g, data.firstName || '');
  result = result.replace(/{lastName}/g, data.lastName || '');
  result = result.replace(/{email}/g, data.email || '');
  result = result.replace(/{company}/g, data.company || '');
  result = result.replace(/{country}/g, data.country || '');
  result = result.replace(/{phoneNumber}/g, data.phoneNumber || '');
  result = result.replace(/{services}/g, Array.isArray(data.services) ? data.services.join(', ') : (data.services || ''));
  result = result.replace(/{budget}/g, data.budget || '');
  result = result.replace(/{timeline}/g, data.timeline || '');
  result = result.replace(/{message}/g, data.message || '');
  
  return result;
};

// Auto-reply email template (fallback)
const getDefaultAutoReplyTemplate = (firstName: string) => {
  return {
    subject: "Thank you for reaching out to Altiora Infotech",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Altiora Infotech</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px 20px; border: 1px solid #e0e0e0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none; }
          .logo-img { max-width: 120px; height: auto; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto; }
          .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .highlight { color: #667eea; font-weight: bold; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; }
          .contact-info { margin-top: 15px; font-size: 14px; color: #666; }
          .questions { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .questions ul { margin: 10px 0; padding-left: 20px; }
          .questions li { margin-bottom: 8px; }
          a { color: #667eea; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png" alt="Altiora Infotech Logo" class="logo-img">
            <div class="logo">Altiora Infotech</div>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Blockchain • Web 2.0 & Web 3.0 • DeFi Solutions</p>
          </div>
          
          <div class="content">
            <h2 style="color: #333; margin-top: 0;">Hello,</h2>
            
            <p>Thank you for contacting <span class="highlight">Altiora Infotech</span> through our website. We appreciate your interest in our services.</p>
            
            <p>At Altiora Infotech, we bring deep expertise in <strong>blockchain architecture, decentralized application development, Web 2.0 & Web 3.0 ecosystem growth</strong>. Our team has extensive knowledge across DeFi, NFT marketplaces, tokenized crowdfunding, and Layer 1/Layer 2 network integrations, helping partners transform ideas into scalable, secure, and investor-ready products.</p>
            
            <div class="questions">
              <p><strong>To understand your requirements better and propose the most suitable approach, could you please share a few additional details about your project/requirement?</strong></p>
              <ul>
                <li>Brief overview of what you're planning to build</li>
                <li>Key features or challenges you want to address</li>
              </ul>
            </div>
            
            <p>Once we receive this information, our team will review and get back to you with the right solution strategy, estimated timeline, and next steps.</p>
            
            <p>To move things faster, we'd be happy to connect on a quick 15–20 minute call to understand your requirements in detail. Please share your availability, and we'll schedule it accordingly.</p>
            
            <p><span class="highlight">Looking forward to assisting you in bringing your project to life.</span></p>
            
            <div class="signature">
              <p><strong>Best regards,</strong></p>
              <p><strong>Altiora Infotech Team</strong></p>
              
              <div class="contact-info">
                <p>
                  <strong>Email:</strong> <a href="mailto:sales@altiorainfotech.com">sales@altiorainfotech.com</a><br>
                  <strong>Website:</strong> <a href="https://altiorainfotech.com">https://altiorainfotech.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This is an automated response. Please reply to this email with your project details.<br>
              For urgent matters, contact us directly at <a href="mailto:sales@altiorainfotech.com">sales@altiorainfotech.com</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `Hello,

Thank you for contacting Altiora Infotech through our website. We appreciate your interest in our services.

At Altiora Infotech, we bring deep expertise in blockchain architecture, decentralized application development, Web 2.0 & Web 3.0 ecosystem growth. Our team has extensive knowledge across DeFi, NFT marketplaces, tokenized crowdfunding, and Layer 1/Layer 2 network integrations, helping partners transform ideas into scalable, secure, and investor-ready products.

To understand your requirements better and propose the most suitable approach, could you please share a few additional details about your project/requirement?

• Brief overview of what you're planning to build
• Key features or challenges you want to address

Once we receive this information, our team will review and get back to you with the right solution strategy, estimated timeline, and next steps.

To move things faster, we'd be happy to connect on a quick 15–20 minute call to understand your requirements in detail. Please share your availability, and we'll schedule it accordingly.

Looking forward to assisting you in bringing your project to life.

Best regards,
Altiora Infotech Team

Email: sales@altiorainfotech.com
Website: https://altiorainfotech.com

---
This is an automated response. Please reply to this email with your project details.
For urgent matters, contact us directly at sales@altiorainfotech.com`
  };
};

// Send auto-reply email
export const sendAutoReply = async (data: AutoReplyData & any): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    // Try to get template from database
    let template = await getEmailTemplate('auto-reply');
    let bccEmails: string[] = [];
    
    console.log('📧 Email template fetched:', template ? 'Database template' : 'Fallback template');
    
    if (template) {
      // Use database template with variable replacement
      console.log('📧 BCC Status:', { bccEnabled: template.bccEnabled, bccEmails: template.bccEmails });
      
      // Extract BCC configuration BEFORE reassigning template
      if (template.bccEnabled && template.bccEmails && template.bccEmails.length > 0) {
        bccEmails = template.bccEmails.filter((email: string) => email && email.trim() !== '');
        console.log('📧 BCC emails configured:', bccEmails);
      }
      
      // Now replace variables in template content
      template = {
        subject: replaceVariables(template.subject, data),
        html: replaceVariables(template.htmlContent, data),
        text: replaceVariables(template.textContent, data)
      };
    } else {
      // Use fallback template
      console.log('📧 Using fallback template');
      template = getDefaultAutoReplyTemplate(data.firstName);
    }

    const mailOptions: any = {
      from: {
        name: 'Altiora Infotech',
        address: process.env.GMAIL_USER || 'sales@altiorainfotech.com'
      },
      to: data.email,
      subject: template.subject,
      html: template.html,
      text: template.text,
      replyTo: 'sales@altiorainfotech.com',
    };

    // Add BCC if configured
    if (bccEmails.length > 0) {
      mailOptions.bcc = bccEmails;
      console.log('📧 BCC added to mail options:', bccEmails);
    } else {
      console.log('📧 No BCC emails configured');
    }

    console.log('📧 Sending email to:', data.email);
    const result = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully');
    return true;
  } catch (error) {
    console.error('📧 Email sending failed:', error);
    return false;
  }
};

// Send notification email to admin
export const sendAdminNotification = async (contactData: any): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    // Try to get template from database
    let template = await getEmailTemplate('admin-notification');
    
    if (template) {
      // Use database template with variable replacement
      template = {
        subject: replaceVariables(template.subject, contactData),
        html: replaceVariables(template.htmlContent, contactData),
        text: replaceVariables(template.textContent, contactData)
      };
    } else {
      // Use fallback template
      const servicesText = Array.isArray(contactData.services) 
        ? contactData.services.join(', ') 
        : 'Not specified';

      const attachmentsText = contactData.attachments && contactData.attachments.length > 0
        ? contactData.attachments.map((att: any) => `- ${att.originalName} (${(att.fileSize / 1024 / 1024).toFixed(2)} MB)`).join('\n')
        : 'No attachments';

      template = {
        subject: `New Contact Form Submission - ${contactData.firstName} ${contactData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName || ''}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Company:</strong> ${contactData.company || 'Not provided'}</p>
          <p><strong>Country:</strong> ${contactData.country || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${contactData.phoneCode || ''} ${contactData.phoneNumber || 'Not provided'}</p>
          <p><strong>Services:</strong> ${servicesText}</p>
          <p><strong>Budget:</strong> ${contactData.budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${contactData.timeline || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${contactData.message || 'No message provided'}</p>
          <p><strong>Attachments:</strong></p>
          <pre>${attachmentsText}</pre>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
        text: `New Contact Form Submission

Name: ${contactData.firstName} ${contactData.lastName || ''}
Email: ${contactData.email}
Company: ${contactData.company || 'Not provided'}
Country: ${contactData.country || 'Not provided'}
Phone: ${contactData.phoneCode || ''} ${contactData.phoneNumber || 'Not provided'}
Services: ${servicesText}
Budget: ${contactData.budget || 'Not specified'}
Timeline: ${contactData.timeline || 'Not specified'}
Message: ${contactData.message || 'No message provided'}
Attachments: ${attachmentsText}
Submitted: ${new Date().toLocaleString()}`
      };
    }

    const mailOptions = {
      from: {
        name: 'Altiora Contact Form',
        address: process.env.GMAIL_USER || 'sales@altiorainfotech.com'
      },
      to: 'sales@altiorainfotech.com',
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    const result = await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
};