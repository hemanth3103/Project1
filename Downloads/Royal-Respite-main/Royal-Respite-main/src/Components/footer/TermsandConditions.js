import React from "react";
import styles from "./TermsConditions.module.css";

function TermsConditions() {
  return (
    <div className={styles.termsContainer}>
      <h1>Terms & Conditions</h1>
      <p>Effective Date: {new Date().toDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Royal Respite website, you agree to comply with these Terms & Conditions.</p>

      <h2>2. Booking & Payment</h2>
      <p>All bookings are subject to availability. Payment must be completed at the time of booking. Cancellations and refunds are subject to our <a href="/cancellation-policy">Cancellation Policy</a>.</p>

      <h2>3. Guest Responsibilities</h2>
      <p>Guests must provide accurate information when booking. Any damage caused to hotel property will be charged accordingly.</p>

      <h2>4. Check-in & Check-out</h2>
      <p>Check-in time: 2:00 PM | Check-out time: 12:00 PM. Early check-in or late check-out is subject to availability and additional charges.</p>

      <h2>5. Liability</h2>
      <p>The hotel is not responsible for any loss, theft, or damage to personal belongings during the stay.</p>

      <h2>6. Amendments</h2>
      <p>Royal Respite reserves the right to update these terms at any time without prior notice.</p>

      <h2>7. Contact</h2>
      <p>For any questions regarding these Terms & Conditions, contact us at support@royalrespite.com.</p>
    </div>
  );
}

export default TermsConditions;
