import React from "react";
import { FaPhoneAlt, FaHome, FaEnvelope } from "react-icons/fa";
import ContactItemCard from "./ContactItemCard";

function ContactItems() {
  return (
    <div className="contact-list">
      <ContactItemCard>
        <i>
          <FaPhoneAlt className="icons" size={"25px"} />
        </i>
        <h3 className="quicksand">Talk to Me</h3>
        <p>
          Looking for a{" "}
          <span className="secondary-color">
            New Website or Mobile Application?
          </span>{" "}
          Just pick up the phone and call me
        </p>
        <p className="secondary-color">(438) 884- 9728</p>
      </ContactItemCard>
      <ContactItemCard>
        <i>
          <FaEnvelope className="icons" size={"25px"} />
        </i>
        <h3 className="quicksand">Send me an email</h3>
        <p className="secondary-color">Harrythind41@gmail.com</p>
      </ContactItemCard>
      <ContactItemCard>
        <i>
          <FaHome className="icons" size={"25px"} />
        </i>
        <h3 className="quicksand">Located At</h3>
        <p className="secondary-color">
          288 Rue Bellini, Vaudreuil Dorion, Quebec (J7V 0M7)
        </p>
      </ContactItemCard>
    </div>
  );
}

export default ContactItems;
