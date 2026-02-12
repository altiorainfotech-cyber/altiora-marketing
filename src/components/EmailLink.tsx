"use client";

interface EmailLinkProps {
  email: string;
  children: React.ReactNode;
  className?: string;
}

export default function EmailLink({ email, children, className }: EmailLinkProps) {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // Try to open email client
      window.location.href = `mailto:${email}`;
      
      // Fallback: copy to clipboard after a short delay
      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText(email);
          alert(`Email copied to clipboard: ${email}`);
        } catch (err) {
          // If clipboard fails, show the email
          alert(`Please email us at: ${email}`);
        }
      }, 1000);
    } catch (err) {
      // If mailto fails, copy to clipboard
      try {
        await navigator.clipboard.writeText(email);
        alert(`Email copied to clipboard: ${email}`);
      } catch (clipErr) {
        alert(`Please email us at: ${email}`);
      }
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}