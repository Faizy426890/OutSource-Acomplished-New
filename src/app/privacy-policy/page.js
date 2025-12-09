import React from 'react';

// Define the inline styles as JavaScript objects
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
  placeholder: {
    fontWeight: '700',
    color: '#cc0000',
    backgroundColor: '#ffe5e5',
    padding: '2px 4px',
    borderRadius: '4px',
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
  }
};

const Placeholder = ({ children }) => (
  <span style={styles.placeholder}>{children}</span>
);

const Bold = ({ children }) => (
  <span style={styles.boldKey}>{children}</span>
);

// Inline SVG for the unchecked checkbox placeholder
const UncheckedIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width: '20px', height: '20px', borderRadius: '3px', border: '2px solid #333', flexShrink: 0, marginTop: '4px'}}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="#ffffff" />
    </svg>
);

const App = () => {
  // Calculate the current date for the Effective Date
  const currentDate = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const effectiveDate = currentDate.toLocaleDateString('en-US', dateOptions);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>GrowEdgeX BPO Privacy Policy</h1>

      <p style={styles.bodyText}>
        <Bold>Effective Date:</Bold> {effectiveDate}
      </p>

      {/* --- I. Introduction and Scope --- */}
      <h2 style={styles.sectionTitle}>I. Introduction and Scope</h2>
      <p style={styles.bodyText}>
        This Privacy Policy details how GrowEdgeX BPO (referred to as "we," "us," or "our"), an entity established in <Bold>Dallas, Texas</Bold>, collects, uses, and protects the Personal Information of website visitors and business contacts. By using our website, you agree to the terms described in this policy.
      </p>

      {/* --- II. Information We Collect --- */}
      <h2 style={styles.sectionTitle}>II. Information We Collect</h2>
      <p style={styles.bodyText}>
        We collect information essential for managing commercial relationships and delivering our BPO services:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}><Bold>Client Contact Data:</Bold> Name, job title, company name, work email address, and business phone number when you inquire about or contract services.</li>
        <li style={styles.listItem}><Bold>Operational/Commercial Data:</Bold> Details regarding the specific BPO services your company requires.</li>
        <li style={styles.listItem}><Bold>Billing Data:</Bold> Information necessary for invoicing and payment processing.</li>
        <li style={styles.listItem}><Bold>Usage Data:</Bold> Your IP address, device information, browser type, and pages visited on our site, collected for analytics and security.</li>
      </ul>

      {/* --- III. How We Use Your Information --- */}
      <h2 style={styles.sectionTitle}>III. How We Use Your Information</h2>
      <p style={styles.bodyText}>
        We use the collected information primarily to deliver and manage our BPO services:
      </p>
      <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
        <li style={styles.listItem}><Bold>Contract Management:</Bold> To onboard your company, execute the services outlined in our agreements, and provide technical support.</li>
        <li style={styles.listItem}><Bold>Client Communication:</Bold> To send operational updates, service performance reports, and respond to your inquiries.</li>
        <li style={styles.listItem}><Bold>Third-Party Services:</Bold> To facilitate professional communication, your business contact details are used with our communication service provider, such as RingCentral.</li>
        <li style={styles.listItem}><Bold>Marketing:</Bold> To send promotional materials and offers, only if you provide explicit consent.</li>
      </ul>

      {/* --- IV. Sharing and Disclosure of Information --- */}
      <h2 style={styles.sectionTitle}>IV. Sharing and Disclosure of Information</h2>
      <p style={styles.bodyText}>
        We treat client data confidentially. Disclosure is limited to:
      </p>
      <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
        <li style={styles.listItem}><Bold>Internal Teams:</Bold> Sharing with GrowEdgeX BPO staff necessary to manage your account and deliver services.</li>
        <li style={styles.listItem}><Bold>Service Providers:</Bold> Sharing with vendors like hosting providers and our phone platform (RingCentral), who are contractually required to protect your data.</li>
        <li style={styles.listItem}><Bold>Legal Compliance:</Bold> Disclosure when legally mandated by court order or government regulation.</li>
      </ul>

      {/* --- SMS Policy Section (Crucial for TCR/RingCentral Compliance) --- */}
      <h2 style={{ ...styles.sectionTitle, color: '#0066cc' }}>📱 GrowEdgeX BPO SMS (Text Message) Policy</h2>
      <p style={styles.bodyText}>
        This notice addresses compliance for all business-related text communications sent by GrowEdgeX BPO.
      </p>

      <div style={styles.smsCompliance}>
        <h3 style={styles.subTitle}>A. Consent and Program Details (TCR/TCPA Compliance)</h3>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li style={styles.listItem}><Bold>Purpose:</Bold> Text messages are used strictly for business-critical communication, such as urgent service alerts, confirming critical operational data, and agent follow-up.</li>
          <li style={styles.listItem}><Bold>Cost:</Bold> <Bold>Message and data rates may apply</Bold> from your mobile carrier.</li>
          <li style={styles.listItem}><Bold>Message Frequency:</Bold> Varies based on your service status and inquiry volume.</li>
        </ul>

        <h3 style={styles.subTitle}>B. Opt-Out and Data Restriction</h3>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li style={styles.listItem}><Bold>Opt-Out:</Bold> You can cease all text communications at any time by replying <Bold>"STOP"</Bold> to any message you receive. Reply <Bold>"HELP"</Bold> for assistance.</li>
          <li style={styles.listItem}>
            <Bold>Data Privacy Restriction (TCR Requirement):</Bold> <Bold>Phone numbers and SMS consent obtained from your contacts will not be sold, shared, or traded with any third parties or affiliates for marketing or any non-operational purpose.</Bold>
          </li>
        </ul>
      </div>

      {/* --- Terms of Service Summary --- */}
      <h2 style={styles.sectionTitle}>📜 Terms of Service Summary for GrowEdgeX BPO</h2>
      <p style={styles.bodyText}>
        This is a summary of our core Terms of Service ("Terms"). By using www.growedgex.com, you agree to these Terms.
      </p>

      <h3 style={styles.subTitle}>I. Use of Website</h3>
      <p style={styles.bodyText}>
        The website is provided to inform you about and engage you in our BPO services. You agree not to use the site for any unlawful purpose and affirm that all information you provide to GrowEdgeX BPO is accurate.
      </p>

      <h3 style={styles.subTitle}>IV. Governing Law and Jurisdiction</h3>
      <p style={styles.bodyText}>
        These Terms and your use of the website shall be governed and construed in accordance with the laws of the <Bold>State of Texas</Bold>. Any legal action related to these Terms shall be brought exclusively in the state and federal courts located in <Bold>Dallas County, Texas</Bold>.
      </p>

      {/* --- Implementation Guide Section --- */}
      <div style={styles.checkboxGuide}>
        <h2 style={{ ...styles.sectionTitle, marginTop: '0', borderBottom: '2px solid #ffcc00', color: '#b8860b' }}>Implementation Guide: Required SMS Opt-In Checkbox</h2>
        <p style={styles.bodyText}>
          <Bold>ACTION REQUIRED:</Bold> Place the following text directly next to the <Bold>UN-CHECKED</Bold> checkbox on all your website forms where a phone number is collected. This satisfies the TCPA/CTIA consent mechanism requirement.
        </p>
        <div style={{ padding: '15px', border: '1px dashed #ffcc00', backgroundColor: '#fcf8e3' }}>
          <p style={styles.checkboxText}>
            <UncheckedIcon />
            <span>I consent to GrowEdgeX BPO contacting me via phone or text at the number provided regarding my inquiry and potential BPO services. Reply <Bold>STOP</Bold> to cancel. Standard message and data rates may apply.</span>
          </p>
        </div>
      </div>

      {/* --- SMS Communications Policy (Above Contact Us) --- */}
      <h2 style={styles.sectionTitle}>📱 SMS Communications Policy</h2>
      <p style={styles.bodyText}>
        GrowEdgeX may send SMS messages to users, job applicants, and clients who voluntarily provide their phone number and explicitly opt in to receive text messages. These messages may include service updates, scheduling information, hiring notifications, reminders, and operational communications.
      </p>

      <h3 style={styles.subTitle}>Message Frequency</h3>
      <p style={styles.bodyText}>
        Message frequency varies. You may receive up to 5 messages per week depending on your interactions with GrowEdgeX.
      </p>

      <h3 style={styles.subTitle}>Opt-Out Instructions</h3>
      <p style={styles.bodyText}>
        You may opt out of SMS messages at any time by replying <Bold>STOP</Bold> to any message. Once you opt out, you will no longer receive SMS messages unless you opt in again.
      </p>

      <h3 style={styles.subTitle}>Help</h3>
      <p style={styles.bodyText}>
        For help, reply <Bold>HELP</Bold> or contact us at <Bold>support@growedgex.com</Bold>.
      </p>

      <h3 style={styles.subTitle}>Message & Data Rates</h3>
      <p style={styles.bodyText}>
        Message and data rates may apply depending on your mobile carrier plan.
      </p>

      <h3 style={styles.subTitle}>Consent</h3>
      <p style={styles.bodyText}>
        Providing your phone number is optional. By checking an SMS opt-in box or submitting a form that includes SMS consent language, you authorize GrowEdgeX to send text messages to the number provided.
      </p>

      {/* --- SMS Messaging Terms (Terms & Conditions Section) --- */}
      <h2 style={styles.sectionTitle}>📜 SMS Messaging Terms</h2>
      <p style={styles.bodyText}>
        By providing your phone number and opting in, you agree to receive SMS messages from GrowEdgeX related to service updates, hiring communication, scheduling, and general operational notifications.
      </p>

      <h3 style={styles.subTitle}>Message Frequency</h3>
      <p style={styles.bodyText}>
        Message frequency varies; you may receive up to 5 messages per week.
      </p>

      <h3 style={styles.subTitle}>Opt-Out Instructions</h3>
      <p style={styles.bodyText}>
        You may opt out at any time by replying <Bold>STOP</Bold> to any SMS. After opting out, you will no longer receive messages unless you opt in again.
      </p>

      <h3 style={styles.subTitle}>Help</h3>
      <p style={styles.bodyText}>
        Reply <Bold>HELP</Bold> for assistance or contact <Bold>support@growedgex.com</Bold>.
      </p>

      <h3 style={styles.subTitle}>Message & Data Rates</h3>
      <p style={styles.bodyText}>
        Message and data rates may apply depending on your mobile carrier.
      </p>

      {/* --- Contact Us Section --- */}
      <h2 style={styles.sectionTitle}>Contact Us</h2>
      <p style={{ ...styles.bodyText, marginTop: '20px', textAlign: 'center' }}>
        For further questions or clarification, please contact us at <Placeholder>+1 469 472 2311</Placeholder> or via our website contact form.
      </p>
    </div>
  );
};

export default App;