import React from "react";
import styles from "./Footer.module.css";
import BorderBox from "../common-styles/BorderBox";

function Footer() {
  return (
    <BorderBox>
      <div className={styles.footer}>
        <div>
          <h2>Royal Respite</h2>
          <p>
          Your luxury getaway awaits. Experience comfort, elegance, and world-class hospitality.
          </p>
        </div>
        {/* <div>
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
          <i
            className="fa-brands fa-linkedin fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
          <i
            className="fa-brands fa-facebook fa-xl"
            style={{ color: "rgb(28,173,254)" }}
          />
        </div> */}

         {/* Legal Information */}
         <div className={styles.footerSection}>
          <p>&copy; {new Date().getFullYear()} Royal Respite. All Rights Reserved.</p>
          <p>
            <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
          </p>
        </div>

      </div>
    </BorderBox>
  );
}

export default Footer;