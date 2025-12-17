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

        {/* --- INTRODUCTION --- */}
        <h2 style={styles.sectionTitle}>1. INTRODUCTION</h2>
        <p style={styles.bodyText}>
          GrowEdgeX BPO ("we," "us," or "our"), headquartered in Dallas, Texas, is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share personal information when you visit <Bold>www.growedgex.com</Bold> or engage with our BPO services. By using our services, you agree to the terms outlined in this policy.
        </p>

        {/* --- CHANGES TO OUR PRIVACY POLICY --- */}
        <h2 style={styles.sectionTitle}>2. CHANGES TO OUR PRIVACY POLICY</h2>
        <p style={styles.bodyText}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will notify you of any material changes by posting the new policy on this page and updating the "Effective Date."
        </p>

        {/* --- WHAT TYPE OF INFORMATION DO WE COLLECT? --- */}
        <h2 style={styles.sectionTitle}>3. WHAT TYPE OF INFORMATION DO WE COLLECT?</h2>
        <p style={styles.bodyText}>We collect information that identifies, relates to, or could reasonably be linked to you ("Personal Information"), including:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li style={styles.listItem}><Bold>Identifiers:</Bold> Name, business email address, phone number, and job title.</li>
          <li style={styles.listItem}><Bold>Commercial Data:</Bold> Billing information, service requirements, and project documentation.</li>
          <li style={styles.listItem}><Bold>Internet Activity:</Bold> IP address, browser type, device identifiers, and website interaction logs.</li>
        </ul>

        {/* --- HOW DO WE USE THE INFORMATION --- */}
        <h2 style={styles.sectionTitle}>4. HOW DO WE USE THE INFORMATION THAT WE COLLECT?</h2>
        <p style={styles.bodyText}>Your information is used to:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li style={styles.listItem}>Provide and manage BPO services and client onboarding.</li>
          <li style={styles.listItem}>Process billing and financial transactions.</li>
          <li style={styles.listItem}>Communicate updates, alerts, and project-related notifications.</li>
          <li style={styles.listItem}>Ensure the security and integrity of our website and services.</li>
        </ul>

        {/* --- WITH WHOM DO WE SHARE INFORMATION --- */}
        <h2 style={styles.sectionTitle}>5. WITH WHOM DO WE SHARE INFORMATION THAT WE COLLECT?</h2>
        <p style={styles.bodyText}>
          We do not sell your personal information. We share data only with trusted vendors (hosting, IT security, and communication tools) necessary to deliver our services.
        </p>
        <div style={styles.importantNote}>
          <Bold>CRITICAL NOTICE ON SMS DATA:</Bold> SMS opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes.
        </div>

        {/* --- COOKIES --- */}
        <h2 style={styles.sectionTitle}>6. COOKIES AND SIMILAR TECHNOLOGY</h2>
        <p style={styles.bodyText}>
          Our website uses cookies to enhance user experience, analyze site traffic, and for security purposes. These may include "session" cookies (which expire when you close your browser) and "persistent" cookies (which stay on your device until deleted).
        </p>

        {/* --- MANAGING COOKIES --- */}
        <h2 style={styles.sectionTitle}>7. HOW WE MANAGE YOUR COOKIES</h2>
        <p style={styles.bodyText}>
          Most web browsers allow you to control cookies through their settings. You can opt to block or delete cookies, though this may impact the functionality of certain parts of our website.
        </p>

        {/* --- SMS TERMS AND CONDITIONS --- */}
        <h2 style={styles.sectionTitle}>8. SMS TERMS AND CONDITIONS</h2>
        <div style={styles.smsComplianceBox}>
          <h3 style={styles.subTitle}>1- SMS Consent Communication</h3>
          <p style={styles.bodyText}>
            The information as phone numbers obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.
          </p>

          <h3 style={styles.subTitle}>2- Types of SMS Communications</h3>
          <p style={styles.bodyText}>
            If you have consented to receive text messages from GrowEdgeX, you may receive messages related to the following:
          </p>
          <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
            <li style={styles.listItem}>Service inquiries and follow-ups</li>
            <li style={styles.listItem}>Appointment/Meeting reminders</li>
            <li style={styles.listItem}>Billing or account inquiries</li>
            <li style={styles.listItem}>Project updates or operational alerts</li>
          </ul>

          <h3 style={styles.subTitle}>3- Message Frequency</h3>
          <p style={styles.bodyText}>
            Message frequency may vary depending on the type of communication. You may receive up to <Bold>5 SMS messages per week</Bold> related to your inquiries or account management.
          </p>

          <h3 style={styles.subTitle}>4- Potential Fees for SMS Messaging</h3>
          <p style={styles.bodyText}>
            Please note that <Bold>standard message and data rates may apply</Bold>, depending on your carrier’s pricing plan. These fees may vary if the message is sent domestically or internationally.
          </p>

          <h3 style={styles.subTitle}>5- Opt-In Method</h3>
          <p style={styles.bodyText}>
            You may opt-in to receive SMS messages from GrowEdgeX by submitting our online contact forms and checking the consent box.
          </p>

          <h3 style={styles.subTitle}>6- Opt-Out Method</h3>
          <p style={styles.bodyText}>
            You can opt out of receiving SMS messages at any time. To do so, simply reply <Bold>"STOP"</Bold> to any SMS message you receive. You may also contact us directly to request removal.
          </p>

          <h3 style={styles.subTitle}>7- Help</h3>
          <p style={styles.bodyText}>
            If you are experiencing any issues, you can reply with the keyword <Bold>HELP</Bold> or email us at <Bold>info@growedgex.com</Bold>.
          </p>
        </div>

        {/* --- CONTACT INFORMATION --- */}
        <h2 style={styles.sectionTitle}>9. WHO CAN YOU CONTACT FOR MORE INFORMATION?</h2>
        <div style={styles.footerInfo}>
          <p style={styles.bodyText}>
            For questions regarding this policy or to exercise your data rights, please contact us:
          </p>
          <p style={styles.bodyText}>📧 <Bold>info@growedgex.com</Bold></p>
          <p style={styles.bodyText}>📞 <Bold>+1 469-472-2311</Bold></p>
          <p style={styles.bodyText}>🌐 <Link href="/">www.growedgex.com</Link></p>
          
          {/* FIXED: Merged duplicate style attributes into one object */}
          <p style={{ ...styles.bodyText, marginTop: '20px' }}>
            <Bold>Terms of Service:</Bold> View our full <Link href="/terms" style={{color: '#004c99', textDecoration: 'underline'}}>Terms and Conditions here</Link>.
          </p>
        </div>
      </div> 
    </MainLayout> 
  );
};

export default PrivacyPolicy;