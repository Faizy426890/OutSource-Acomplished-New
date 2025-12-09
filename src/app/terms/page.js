import React from 'react';

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
  welcomeBox: {
    backgroundColor: '#f0f8ff',
    border: '1px solid #004c99',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '30px',
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
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>GrowEdgeX Corp. – Terms & Conditions</h1>

      <p style={styles.bodyText}>
        <Bold>Last Updated:</Bold> February 09, 2025
      </p>

      {/* --- Welcome Section --- */}
      <div style={styles.welcomeBox}>
        <p style={styles.bodyText}>
          Welcome to <Bold>GrowEdgeX Corp.</Bold> ("GrowEdgeX," "we," "our," "us"). These Terms & Conditions ("Terms") govern your use of our website, services, SMS communications, and any related platforms operated by GrowEdgeX.
        </p>
        <p style={styles.bodyText}>
          <Bold>By accessing our website, submitting your information, or using any of our services—including SMS—you agree to these Terms. If you do not agree, please discontinue use of our services.</Bold>
        </p>
      </div>

      {/* --- 1. Use of Our Website and Services --- */}
      <h2 style={styles.sectionTitle}>1. Use of Our Website and Services</h2>
      <p style={styles.bodyText}>
        By using our website or services, you affirm that:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>You are at least 18 years old.</li>
        <li style={styles.listItem}>The information you provide is accurate and truthful.</li>
        <li style={styles.listItem}>You will use our services only for lawful purposes.</li>
      </ul>
      <p style={styles.bodyText}>
        GrowEdgeX provides business process outsourcing (BPO), administrative support, hiring communication, and related services for clients and job applicants.
      </p>
      <p style={styles.bodyText}>
        We reserve the right to modify, suspend, or discontinue any part of our services at any time.
      </p>

      {/* --- 2. SMS Communication & Messaging Terms --- */}
      <h2 style={{ ...styles.sectionTitle, color: '#0066cc' }}>📱 2. SMS Communication & Messaging Terms</h2>
      <p style={styles.bodyText}>
        By providing your phone number and opting in through a website form, job application, or any other consent mechanism, you agree to receive SMS messages from GrowEdgeX related to service updates, hiring communication, scheduling, coordination, application status, onboarding, and general operational notifications.
      </p>

      <div style={styles.smsCompliance}>
        <h3 style={styles.subTitle}>Message Frequency</h3>
        <p style={styles.bodyText}>
          Message frequency varies depending on your interactions with us. You may receive up to 5 messages per week.
        </p>

        <h3 style={styles.subTitle}>Opt-Out Instructions</h3>
        <p style={styles.bodyText}>
          You may opt out of SMS messages at any time by replying <Bold>STOP</Bold> to any message. After opting out, you will no longer receive SMS messages unless you opt in again.
        </p>

        <h3 style={styles.subTitle}>Help</h3>
        <p style={styles.bodyText}>
          Reply <Bold>HELP</Bold> for assistance or contact <Bold>info@growedgex.com</Bold>.
        </p>

        <h3 style={styles.subTitle}>Message & Data Rates</h3>
        <p style={styles.bodyText}>
          Message and data rates may apply depending on your mobile carrier plan.
        </p>

        <h3 style={styles.subTitle}>Consent Requirements</h3>
        <p style={styles.bodyText}>
          Providing your phone number is optional and not required to use our services. SMS messages are only sent when you provide explicit consent. Consent is never sold or shared with third parties or affiliates.
        </p>
        <p style={styles.bodyText}>
          For additional information on how your data is used, please review our Privacy Policy:<br />
          <a href="https://www.growedgex.com/privacy-policy" style={{ color: '#004c99', textDecoration: 'underline' }}>https://www.growedgex.com/privacy-policy</a>
        </p>
      </div>

      {/* --- 3. User Responsibilities --- */}
      <h2 style={styles.sectionTitle}>3. User Responsibilities</h2>
      <p style={styles.bodyText}>
        You agree not to:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Use our services for unlawful, harmful, or fraudulent purposes.</li>
        <li style={styles.listItem}>Introduce viruses or malicious code to our systems.</li>
        <li style={styles.listItem}>Attempt to access restricted areas of the website without authorization.</li>
        <li style={styles.listItem}>Misuse or distribute confidential information received from GrowEdgeX.</li>
      </ul>

      {/* --- 4. Privacy & Data Protection --- */}
      <h2 style={styles.sectionTitle}>4. Privacy & Data Protection</h2>
      <p style={styles.bodyText}>
        Your privacy is important to us. Our Privacy Policy explains in detail:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>What information we collect</li>
        <li style={styles.listItem}>How we use that information</li>
        <li style={styles.listItem}>Who we share information with</li>
        <li style={styles.listItem}>How users can exercise their rights</li>
      </ul>
      <p style={styles.bodyText}>
        Review our Privacy Policy here:<br />
        <a href="https://www.growedgex.com/privacy-policy" style={{ color: '#004c99', textDecoration: 'underline' }}>https://www.growedgex.com/privacy-policy</a>
      </p>

      {/* --- 5. Intellectual Property --- */}
      <h2 style={styles.sectionTitle}>5. Intellectual Property</h2>
      <p style={styles.bodyText}>
        All website content—including text, images, graphics, logos, and software—is owned by GrowEdgeX or its licensors and is protected by copyright and trademark laws.
      </p>
      <p style={styles.bodyText}>
        You may not copy, reproduce, modify, or distribute any content without written permission.
      </p>

      {/* --- 6. Third-Party Links --- */}
      <h2 style={styles.sectionTitle}>6. Third-Party Links</h2>
      <p style={styles.bodyText}>
        Our website may contain links to external third-party sites. GrowEdgeX is not responsible for the content, security, or practices of these websites.
      </p>
      <p style={styles.bodyText}>
        You access third-party sites at your own risk.
      </p>

      {/* --- 7. No Guarantee of Service --- */}
      <h2 style={styles.sectionTitle}>7. No Guarantee of Service</h2>
      <p style={styles.bodyText}>
        GrowEdgeX strives to provide consistent and reliable services, but we do not guarantee uninterrupted or error-free operation. We are not responsible for delays, outages, or issues caused by external systems or carriers.
      </p>

      {/* --- 8. Limitation of Liability --- */}
      <h2 style={styles.sectionTitle}>8. Limitation of Liability</h2>
      <p style={styles.bodyText}>
        To the maximum extent permitted by law, GrowEdgeX is not liable for:
      </p>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={styles.listItem}>Indirect, incidental, or consequential damages</li>
        <li style={styles.listItem}>Loss of profits or data</li>
        <li style={styles.listItem}>Issues arising from your misuse of the website or services</li>
      </ul>
      <p style={styles.bodyText}>
        Your sole remedy for dissatisfaction with our website or services is to discontinue using them.
      </p>

      {/* --- 9. Indemnification --- */}
      <h2 style={styles.sectionTitle}>9. Indemnification</h2>
      <p style={styles.bodyText}>
        You agree to indemnify and hold GrowEdgeX, its employees, and partners harmless from claims or damages arising from your use of our website or services, violation of these Terms, or infringement of third-party rights.
      </p>

      {/* --- 10. Modifications to These Terms --- */}
      <h2 style={styles.sectionTitle}>10. Modifications to These Terms</h2>
      <p style={styles.bodyText}>
        We may update or modify these Terms at any time. The most recent version will always be available on our website.
      </p>
      <p style={styles.bodyText}>
        Continued use of our services after changes indicates acceptance of the updated Terms.
      </p>

      {/* --- 11. Governing Law --- */}
      <h2 style={styles.sectionTitle}>11. Governing Law</h2>
      <p style={styles.bodyText}>
        These Terms are governed by the laws of the <Bold>State of Texas</Bold>, without regard to conflict-of-law principles. Any disputes must be resolved in courts located in Texas.
      </p>

      {/* --- 12. Contact Information --- */}
      <h2 style={styles.sectionTitle}>12. Contact Information</h2>
      <p style={styles.bodyText}>
        For questions about these Terms or our services, you may contact us through our website:<br />
        <a href="https://www.growedgex.com" style={{ color: '#004c99', textDecoration: 'underline' }}>https://www.growedgex.com</a>
      </p>

      {/* --- Implementation Guide Section --- */}
      <div style={styles.checkboxGuide}>
        <h2 style={{ ...styles.sectionTitle, marginTop: '0', borderBottom: '2px solid #ffcc00', color: '#b8860b' }}>Implementation Guide: Required SMS Opt-In Checkbox</h2>
        <p style={styles.bodyText}>
          <Bold>Place the following next to an unchecked checkbox on all forms collecting phone numbers:</Bold>
        </p>
        <div style={{ padding: '15px', border: '1px dashed #ffcc00', backgroundColor: '#fcf8e3', marginTop: '15px' }}>
          <p style={styles.checkboxText}>
            <UncheckedIcon />
            <span>I consent to GrowEdgeX Corp. contacting me via phone or text at the number provided regarding my inquiry, application status, and services. Reply <Bold>STOP</Bold> to cancel. Standard message and data rates may apply.</span>
          </p>
        </div>
      </div>

      {/* --- Footer --- */}
      <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '6px', borderTop: '3px solid #004c99' }}>
        <p style={{ ...styles.bodyText, textAlign: 'center', marginBottom: '10px', fontSize: '1.1rem', fontWeight: '600', color: '#1a5a99' }}>
          GrowEdgeX — Business Process OutSourcing (BPO) & Management Firm
        </p>
        <p style={{ ...styles.bodyText, textAlign: 'center', marginBottom: '0' }}>
          GrowEdgeX is a trusted BPO firm offering professional business process solutions, customer support, and call center services that drive business growth.
        </p>
      </div>
    </div>
  );
};

export default App;