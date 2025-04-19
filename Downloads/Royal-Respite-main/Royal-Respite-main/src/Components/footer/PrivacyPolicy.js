import React from "react";
import styles from "./PrivacyPolicy.module.css";

function PrivacyPolicy() {
  return (
    <div className={styles.privacyContainer}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: {new Date().toDateString()}</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Royal Respite. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.</p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li>Personal details such as name, email, phone number, and address.</li>
        <li>Payment information for booking transactions.</li>
        <li>Browsing behavior on our website.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Process bookings and payments securely.</li>
        <li>Improve user experience and website functionality.</li>
        <li>Send promotional offers and newsletters (with your consent).</li>
      </ul>

      <h2>4. Data Protection</h2>
      <p>We implement security measures to protect your personal data and prevent unauthorized access.</p>

      <h2>5. Cookies</h2>
      <p>We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.</p>

      <h2>6. Third-Party Sharing</h2>
      <p>We do not sell or share your personal information with third parties, except when necessary for booking services.</p>

      <h2>7. Your Rights</h2>
      <p>You have the right to access, update, or delete your personal data. Contact us for any requests.</p>

      <h2>8. Contact Information</h2>
      <p>If you have any questions about our Privacy Policy, contact us at support@royalrespite.com.</p>
    </div>
  );
}

export default PrivacyPolicy;
