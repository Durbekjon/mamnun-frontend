"use client";
import { useState } from "react";
import "./style.css";
import { QuoteRequestService } from "@/services/quote-request.service";
import {
  CreateQuoteRequestDto,
  QuoteType,
} from "@/interfaces/create-quote-request";

export default function QuoteRequest(props: {
  currentPage: string;
  services: { id: number; title: string }[];
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [serviceId, setServiceId] = useState<number>(1); // ✅ Fixed case

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData: CreateQuoteRequestDto = {
      name: name.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber.trim() || undefined,
      message: message.trim(),
      quoteType: props.currentPage === "education" ? "EDU" : "TRAVEL",
      serviceId,
    };

    try {
      const res = await QuoteRequestService.create(formData);
      if (res.status === 201) {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setServiceId(1);
        alert("Quote request submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Error submitting quote request. Please check your connection.");
    }
  };

  return (
    <section className="quote-section" id="quote">
      <div className="quote-container">
        <div className="quote-info">
          <h1 className="quote-title">Get a Quote</h1>
          <div className="quote-details">
            <div className="quote-item">
              <img
                src="/images/icons/location.png"
                alt="Location"
                className="icon"
              />
              <p>
                Farobiy st. 229 <br /> 100002 <br /> Tashkent, Uzbekistan
              </p>
            </div>
            <div className="quote-item">
              <img
                src="/images/icons/telephone.png"
                alt="Phone"
                className="icon"
              />
              <p>+998949181305</p>
            </div>
            <div className="quote-item">
              <img src="/images/icons/mail.png" alt="Email" className="icon" />
              <p>
                info@mamnunagency.com <br /> mamnunagency@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="quote-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
              <label>Phone Number (Optional)</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Request Type</label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(Number(e.target.value))}
                required
              >
                {props.services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
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
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
