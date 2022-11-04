import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import PortfolioContext from "../context/PortfolioContext";

function ContactForm() {
  const { sendEmail } = useContext(PortfolioContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState({
    fullNameMissing: null,
    emailMissing: null,
    companyMissing: null,
    messageMissing: null,
  });
  const [emailMissing, setEmailMissing] = useState("");
  const [nameMissing, setNameMissing] = useState("");
  const [companyMissing, setCompanyMissing] = useState("");
  const [infoMissing, setInfoMissing] = useState(""); 
  const validateForm = (e) => {
    e.preventDefault();
    if (fullName === "" || email === "" || company === "" || message === "") {
      if (fullName === "") {
        setNameMissing("Full Name is Required");
      }
      if (email === "") {
        setEmailMissing("Email Address is Required");
      }
      if (company === "") {
        setCompanyMissing("Company name is Required");
      }
      if (message === "") {
        setInfoMissing("Additional Information is Required");
      }
    } else {
      emailjs
        .sendForm("gmail", "portfolio_template", e.target, "U51Ml6qO-w_Ci6eJW")
        .then(
          (result) => {
            alert("email sent successfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
      setBtnDisabled(false);
    }
  };
  return (
    <div className="contact-form quicksand bold-text">
      <form onSubmit={validateForm}>
        <label htmlFor="name">Full Name</label>
        <input
          onChange={(e) => {
            setFullName(e.target.value);
            setNameMissing(null);
          }}
          type="text"
          name="full name"
          value={fullName}
        />
        {nameMissing && <div className="data-missing">{nameMissing}</div>}
        <label htmlFor="email">Email Address</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailMissing(null);
          }}
          type="text"
          name="email"
          value={email}
        />
        {emailMissing && <div className="data-missing">{emailMissing}</div>}
        <label htmlFor="company">Company</label>
        <input
          onChange={(e) => {
            setCompany(e.target.value);
            setCompanyMissing(null);
          }}
          type="text"
          name="company"
          value={company}
        />
        {companyMissing && <div className="data-missing">{companyMissing}</div>}

        <label htmlFor="Additional">Additional Information</label>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
            setInfoMissing(null);
          }}
          type="text"
          name="message"
          value={message}
        />
        {infoMissing && <div className="data-missing">{infoMissing}</div>}
        <button type="submit" className="btn-secondary">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
