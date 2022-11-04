import React from "react";
import ContactItems from "../components/ContactItems";
import contact from "../images/project-images/contact2.jpg";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <div className="contact-image">
        <img src={contact} alt="No contact pic found" />
      </div>
      <div>
        <ContactItems />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
