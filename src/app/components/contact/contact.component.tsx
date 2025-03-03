"use client";
import { useState } from "react";
import "./style.css";
import { CreateContactFormDto } from "@/interfaces/create-contact-form";
import { ContactFormService } from "@/services/contact-form.service";
import { SubjectType } from "../../../interfaces/create-contact-form";

const SUBJECT_TYPE: SubjectType = {
  edu: "edu",
  travel: "travel",
  business: "business",
  other: "other",
};
export default function ContactComponent(props: { currentPage: string }) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    let subject: string = SUBJECT_TYPE.other;

    if (props.currentPage === "home") {
      subject = SUBJECT_TYPE.business;
    } else if (
      props.currentPage === "education" ||
      props.currentPage === "edufair"
    ) {
      subject = SUBJECT_TYPE.edu;
    } else if (props.currentPage === "travel") {
      subject = SUBJECT_TYPE.travel;
    }

    const formData: CreateContactFormDto = {
      firstName,
      lastName,
      email: email.trim(),
      message,
      subject,
    };

    const res = await ContactFormService.create(formData);

    if (res.data.result === "OK") {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      return;
    }

    alert("Error");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-details">
            <div className="contact-item">
              <img
                src="/images/icons/location.png"
                alt="Location"
                className="icon"
              />
              <p>
                Farobiy st. 229 <br /> 100002 <br /> Tashkent, Uzbekistan
              </p>
            </div>
            <div className="contact-item">
              <img
                src="/images/icons/telephone.png"
                alt="Phone"
                className="icon"
              />
              <p>+998949181305</p>
            </div>
            <div className="contact-item">
              <img src="/images/icons/mail.png" alt="Email" className="icon" />
              <p>
                info@mamnunagency.com <br /> mamnunagency@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
