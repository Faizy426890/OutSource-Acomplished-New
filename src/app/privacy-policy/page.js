import React from 'react'; 
import MainLayout from "../../components/layout/MainLayout";
import Link from 'next/link';

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '40px 20px',
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
    marginTop: '40px',
    marginBottom: '15px',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
  },
  subTitle: {
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#444444',
    marginTop: '25px',
    marginBottom: '12px',
    borderLeft: '4px solid #1a5a99',
    paddingLeft: '10px',
  },
  bodyText: {
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '#4a4a4a',
  },
  listItem: {
    marginBottom: '10px',
    marginLeft: '20px',
    lineHeight: '1.6',
    color: '#4a4a4a',
  },
  boldKey: {
    fontWeight: '700',
    color: '#222',
  },
  importantNote: {
    backgroundColor: '#fffbe6',
    border: '1px solid #ffe58f',
    padding: '15px',
    borderRadius: '6px',
    margin: '20px 0',
    fontWeight: '600',
    color: '#856404',
  },
  smsComplianceBox: {
    backgroundColor: '#f0f7ff',
    border: '2px solid #004c99',
    borderRadius: '8px',
    padding: '25px',
    marginTop: '30px',
  },
  footerInfo: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    textAlign: 'center',
  }
};

const Bold = ({ children }) => (
  <span style={styles.boldKey}>{children}</span>
);

const PrivacyPolicy = () => {
  return ( 
    <MainLayout>
      <div style={styles.container}>
        <h1 style={styles.header}>GrowEdgeX BPO – Privacy Policy & SMS Terms</h1>

        <p style={styles.bodyText}>
          <Bold>Effective Date:</Bold> December 17, 2025
        </p>

        <h2 style={styles.sectionTitle}>1. INTRODUCTION</h2>
        <p style={styles.bodyText}>
          GrowEdgeX BPO ("we," "us," or "our"), headquartered in Dallas, Texas, is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share personal information when you visit <Bold>www.growedgex.com</Bold> or engage with our BPO services. By using our services, you agree to the terms outlined in this policy.
        </p>

        <h2 style={styles.sectionTitle}>2. CHANGES TO OUR PRIVACY POLICY</h2>
        <p style={styles.bodyText}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations.
        </p>

        <h2 style={styles.sectionTitle}>3. WHAT TYPE OF INFORMATION DO WE COLLECT?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li style={styles.listItem}><Bold>Identifiers:</Bold> Name, email, phone number.</li>
          <li style={styles.listItem}><Bold>Commercial Data:</Bold> Billing and service information.</li>
          <li style={styles.listItem}><Bold>Internet Activity:</Bold> IP address and site interaction.</li>
        </ul>

        <h2 style={styles.sectionTitle}>4. HOW DO WE USE THE INFORMATION?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li style={styles.listItem}>Service delivery and communication</li>
          <li style={styles.listItem}>Customer support</li>
          <li style={styles.listItem}>Security and compliance</li>
        </ul>

        <h2 style={styles.sectionTitle}>5. INFORMATION SHARING</h2>
        <p style={styles.bodyText}>
          We do not sell your personal data. SMS opt-in data is never shared for marketing purposes.
        </p>

        <h2 style={styles.sectionTitle}>6. COOKIES</h2>
        <p style={styles.bodyText}>
          Cookies are used to enhance site performance and security.
        </p>

        <h2 style={styles.sectionTitle}>7. COOKIE MANAGEMENT</h2>
        <p style={styles.bodyText}>
          You may control cookies through your browser settings.
        </p>

        <h2 style={styles.sectionTitle}>8. SMS TERMS AND CONDITIONS</h2>
        <div style={styles.smsComplianceBox}>

          {/* ✅ STANDARD MESSAGING DISCLOSURES */}
          <h3 style={styles.subTitle}>Standard Messaging Disclosures</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={styles.listItem}>Message and data rates may apply.</li>
            <li style={styles.listItem}>
              You can opt out at any time by texting <Bold>"STOP"</Bold>.
            </li>
            <li style={styles.listItem}>
              For assistance, text <Bold>"HELP"</Bold> or visit our Privacy Policy and Terms & Conditions pages.
            </li>
            <li style={styles.listItem}>Message frequency may vary.</li>
          </ul>

          <h3 style={styles.subTitle}>SMS Consent Communication</h3>
          <p style={styles.bodyText}>
            Phone numbers collected for SMS consent are not shared with third parties for marketing.
          </p>

          <h3 style={styles.subTitle}>Types of SMS Communications</h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
            <li style={styles.listItem}>General conversations</li>
            <li style={styles.listItem}>Customer support</li>
            <li style={styles.listItem}>Service-related updates</li>
          </ul>

          <h3 style={styles.subTitle}>Message Frequency</h3>
          <p style={styles.bodyText}>
            You may receive up to <Bold>5 messages per week</Bold>.
          </p>

          <h3 style={styles.subTitle}>Potential Fees</h3>
          <p style={styles.bodyText}>
            Standard message and data rates may apply.
          </p>

          <h3 style={styles.subTitle}>Opt-Out</h3>
          <p style={styles.bodyText}>
            Reply <Bold>"STOP"</Bold> to unsubscribe at any time.
          </p>

          <h3 style={styles.subTitle}>Help</h3>
          <p style={styles.bodyText}>
            Reply <Bold>HELP</Bold> or email <Bold>info@growedgex.com</Bold>.
          </p>
        </div>

        <h2 style={styles.sectionTitle}>9. CONTACT INFORMATION</h2>
        <div style={styles.footerInfo}>
          <p style={styles.bodyText}>📧 info@growedgex.com</p>
          <p style={styles.bodyText}>📞 +1 469-472-2311</p>
          <p style={styles.bodyText}>🌐 <Link href="/">www.growedgex.com</Link></p>
        </div>
      </div> 
    </MainLayout> 
  );
};

export default PrivacyPolicy;
