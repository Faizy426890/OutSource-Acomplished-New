import React from 'react'; 
import MainLayout from "../../components/layout/MainLayout";


const styles = {
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontFamily: 'Inter, Arial, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#004c99',
    borderBottom: '4px solid #004c99',
    paddingBottom: '10px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#1a5a99',
    marginTop: '30px',
    marginBottom: '15px',
    padding: '8px 0',
  },
  subTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#444444',
    marginTop: '20px',
    marginBottom: '10px',
    borderLeft: '4px solid #1a5a99',
    paddingLeft: '10px',
  },
  bodyText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  listItem: {
    marginBottom: '8px',
    marginLeft: '20px',
    lineHeight: '1.5',
  },
  boldKey: {
    fontWeight: '700',
  },
  smsCompliance: {
    backgroundColor: '#e6f0ff',
    border: '1px solid #004c99',
    borderRadius: '6px',
    padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  checkboxGuide: {
    backgroundColor: '#fffbe6',
    border: '1px solid #ffcc00',
    borderRadius: '6px',
    padding: '20px',
    marginTop: '40px',
  },
  checkboxText: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#8b4513',
    lineHeight: '1.8',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  contactInfo: {
    marginTop: '20px',
    textAlign: 'center',
  }
};

const Bold = ({ children }) => (
  <span style={styles.boldKey}>{children}</span>
);

const UncheckedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: '20px', height: '20px', borderRadius: '3px', border: '2px solid #333', flexShrink: 0, marginTop: '4px'}}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#ffffff" />
  </svg>
);

const App = () => {
  const currentDate = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const effectiveDate = currentDate.toLocaleDateString('en-US', dateOptions);

  return ( 
    <MainLayout>
    <div style={styles.container}>
      <h1 style={styles.header}>GrowEdgeX BPO – Privacy Policy</h1>

      <p style={styles.bodyText}>
        <Bold>Effective Date:</Bold> December 9, 2025
      </p>

      {/* --- I. Introduction and Scope --- */}
      <h2 style={styles.sectionTitle}>I. Introduction and Scope</h2>
      <p style={styles.bodyText}>
        This Privacy Policy explains how GrowEdgeX BPO ("we," "us," or "our"), headquartered in <Bold>Dallas, Texas</Bold>, collects, uses, and protects the personal information of website visitors, clients, applicants, and business contacts.
      </p>
      <p style={styles.bodyText}>
        By accessing or using our website, you consent to the practices described in this Policy.
      </p>

      {/* --- II. Information We Collect --- */}
      <h2 style={styles.sectionTitle}>II. Information We Collect</h2>
      
      <h3 style={styles.subTitle}>1. Client Contact Data</h3>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Name</li>
        <li style={styles.listItem}>Job title</li>
        <li style={styles.listItem}>Company name</li>
        <li style={styles.listItem}>Work email address</li>
        <li style={styles.listItem}>Business phone number</li>
      </ul>

      <h3 style={styles.subTitle}>2. Operational / Commercial Data</h3>
      <p style={styles.bodyText}>
        Information regarding the BPO services your company requires, workflows, documentation, and operational needs.
      </p>

      <h3 style={styles.subTitle}>3. Billing Data</h3>
      <p style={styles.bodyText}>
        Information necessary for invoicing, payment processing, and financial reporting.
      </p>

      <h3 style={styles.subTitle}>4. Usage Data</h3>
      <p style={styles.bodyText}>
        We automatically collect:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>IP address</li>
        <li style={styles.listItem}>Device and browser type</li>
        <li style={styles.listItem}>Pages visited</li>
        <li style={styles.listItem}>Interaction logs</li>
      </ul>
      <p style={styles.bodyText}>
        Used for analytics, performance, and security.
      </p>

      {/* --- III. How We Use Your Information --- */}
      <h2 style={styles.sectionTitle}>III. How We Use Your Information</h2>
      
      <h3 style={styles.subTitle}>1. Contract & Service Delivery</h3>
      <p style={styles.bodyText}>
        To:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Onboard your organization</li>
        <li style={styles.listItem}>Deliver and manage BPO services</li>
        <li style={styles.listItem}>Provide operational or technical support</li>
        <li style={styles.listItem}>Maintain communication regarding your account</li>
      </ul>

      <h3 style={styles.subTitle}>2. Client Communication</h3>
      <p style={styles.bodyText}>
        To send:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Service updates</li>
        <li style={styles.listItem}>Operational alerts</li>
        <li style={styles.listItem}>Project-related correspondence</li>
        <li style={styles.listItem}>Follow-up messages</li>
      </ul>

      <h3 style={styles.subTitle}>3. Third-Party Service Providers</h3>
      <p style={styles.bodyText}>
        We may share information with:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Hosting platforms</li>
        <li style={styles.listItem}>Communication platforms (e.g., RingCentral)</li>
        <li style={styles.listItem}>Security and IT vendors</li>
      </ul>
      <p style={styles.bodyText}>
        All vendors must protect your data under contractual obligations.
      </p>

      <h3 style={styles.subTitle}>4. Marketing (Optional)</h3>
      <p style={styles.bodyText}>
        Promotional communications are sent only with explicit consent.
      </p>

      {/* --- IV. Sharing & Disclosure --- */}
      <h2 style={styles.sectionTitle}>IV. Sharing & Disclosure</h2>
      <p style={styles.bodyText}>
        We do not sell personal information. Data is shared only when required:
      </p>

      <h3 style={styles.subTitle}>1. Internal Teams</h3>
      <p style={styles.bodyText}>
        Access granted only to staff necessary to provide services.
      </p>

      <h3 style={styles.subTitle}>2. Service Providers</h3>
      <p style={styles.bodyText}>
        Trusted vendors assisting with hosting, communication, and security.
      </p>

      <h3 style={styles.subTitle}>3. Legal Obligations</h3>
      <p style={styles.bodyText}>
        When required by court order or government regulation.
      </p>

      {/* --- V. SMS Communications & Messaging Policy --- */}
      <h2 style={{ ...styles.sectionTitle, color: '#0066cc' }}>📱 V. SMS Communications & Messaging Policy</h2>
      <div style={styles.smsCompliance}>
        <p style={styles.bodyText}>
          GrowEdgeX may send SMS messages to clients, website users, and job applicants who voluntarily provide their phone number and explicitly opt in to receive text messages. These messages may include service updates, operational alerts, scheduling information, hiring notifications, reminders, or other business-related communications.
        </p>

        <h3 style={styles.subTitle}>Message Frequency</h3>
        <p style={styles.bodyText}>
          Message frequency varies. You may receive up to 5 messages per week depending on your interactions with GrowEdgeX.
        </p>

        <h3 style={styles.subTitle}>Opt-Out Instructions</h3>
        <p style={styles.bodyText}>
          You may opt out of SMS messages at any time by replying <Bold>STOP</Bold> to any message. After opting out, you will not receive further SMS messages unless you opt in again.
        </p>

        <h3 style={styles.subTitle}>Help</h3>
        <p style={styles.bodyText}>
          For assistance, reply <Bold>HELP</Bold> or email <Bold>info@growedgex.com</Bold>.
        </p>

        <h3 style={styles.subTitle}>Message & Data Rates</h3>
        <p style={styles.bodyText}>
          Message and data rates may apply depending on your mobile carrier plan.
        </p>

        <h3 style={styles.subTitle}>Consent Requirements</h3>
        <p style={styles.bodyText}>
          Providing a phone number is optional. SMS messages are only sent when explicit consent is given.
        </p>
        <p style={styles.bodyText}>
          <Bold>GrowEdgeX will never sell, share, or trade phone numbers or SMS consent information with any third party for marketing or non-operational purposes.</Bold>
        </p>
      </div>

      {/* --- VI. Data Security --- */}
      <h2 style={styles.sectionTitle}>VI. Data Security</h2>
      <p style={styles.bodyText}>
        We use industry-standard administrative, technical, and physical safeguards to protect your data.
      </p>
      <p style={styles.bodyText}>
        While we strive for full protection, no method of transmission over the internet is completely secure.
      </p>

      {/* --- VII. Your Rights --- */}
      <h2 style={styles.sectionTitle}>VII. Your Rights</h2>
      <p style={styles.bodyText}>
        Users may have rights to:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Access their personal data</li>
        <li style={styles.listItem}>Request corrections or deletion</li>
        <li style={styles.listItem}>Withdraw consent (including SMS consent)</li>
        <li style={styles.listItem}>Limit certain types of processing</li>
      </ul>
      <p style={styles.bodyText}>
        To exercise these rights, contact <Bold>info@growedgex.com</Bold>.
      </p>

      {/* --- VIII. Terms of Service Summary --- */}
      <h2 style={styles.sectionTitle}>📜 VIII. Terms of Service Summary</h2>
      <p style={styles.bodyText}>
        By using <Bold>www.growedgex.com</Bold>, you agree to:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Use the website lawfully</li>
        <li style={styles.listItem}>Provide accurate information</li>
        <li style={styles.listItem}>Comply with applicable laws</li>
      </ul>
      <p style={styles.bodyText}>
        Full Terms available at: <Bold>https://www.growedgex.com/terms</Bold>
      </p>

      {/* --- IX. Implementation Guide --- */}
      <h2 style={styles.sectionTitle}>IX. Implementation Guide: SMS Opt-In Checkbox (Required)</h2>
      <div style={styles.checkboxGuide}>
        <p style={styles.bodyText}>
          <Bold>ACTION REQUIRED:</Bold> Place this next to an <Bold>unchecked</Bold> checkbox on all forms collecting phone numbers:
        </p>
        <div style={{ padding: '15px', border: '1px dashed #ffcc00', backgroundColor: '#fcf8e3', marginTop: '15px' }}>
          <p style={styles.checkboxText}>
            <UncheckedIcon />
            <span>I consent to GrowEdgeX BPO contacting me via phone or text at the number provided regarding my inquiry and BPO services. Reply <Bold>STOP</Bold> to cancel. Standard message and data rates may apply.</span>
          </p>
        </div>
      </div>

      {/* --- X. Contact Us --- */}
      <h2 style={styles.sectionTitle}>X. Contact Us</h2>
      <p style={styles.bodyText}>
        For questions or privacy-related concerns, contact us at:
      </p>
      <div style={styles.contactInfo}>
        <p style={styles.bodyText}>📧 <Bold>info@growedgex.com</Bold></p>
        <p style={styles.bodyText}>📞 <Bold>+1 469-472-2311</Bold></p>
        <p style={styles.bodyText}>🌐 <Bold>www.growedgex.com</Bold></p>
      </div>
    </div> 
    </MainLayout> 
  );
};

export default App;