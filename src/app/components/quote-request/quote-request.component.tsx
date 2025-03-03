"use client";
import { useState } from "react";
import "./style.css";
import { QuoteRequestService } from "@/services/quote-request.service";
import {
  CreateQuoteRequestDto,
  RequestTypeValues,
  QuoteType,
  RequestType,
} from "@/interfaces/create-quote-request";

// ✅ Correctly maps frontend request types to match backend expectations
const REQUEST_TYPES: Record<RequestType, string> = {
  INTERNSHIPS: "INTERNSHIPS",
  TEACHER_TRAININGS: "TEACHER_TRAININGS",
  SHORT_TERM_PROGRAMS: "SHORT_TERM_PROGRAMS",
  DEGREE_PROGRAMS: "DEGREE_PROGRAMS",
  TOUR_PACKAGE: "TOUR_PACKAGE",
  FULL_VIP_ASSISTANCE: "FULL_VIP_ASSISTANCE",
  MEET_AND_GREET_FAST_TRACK: "MEET_AND_GREET_FAST_TRACK",
  GROUND_TRANSPORTATION: "GROUND_TRANSPORTATION",
};

export default function QuoteRequest(props: { currentPage: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [requestType, setRequestType] = useState<RequestType>("TOUR_PACKAGE"); // ✅ Fixed case

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
      requestType, // ✅ Now directly compatible with backend
    };

    try {
      const res = await QuoteRequestService.create(formData);
      if (res.status === 201) {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setRequestType("TOUR_PACKAGE"); // ✅ Reset with correct enum value
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
        {/* Left Side - Contact Info */}
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

        {/* Right Side - Quote Request Form */}
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
                value={requestType}
                onChange={
                  (e) => setRequestType(e.target.value as RequestType) // ✅ Ensures correct type
                }
                required
              >
                {Object.entries(REQUEST_TYPES).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.replace(/_/g, " ")} {/* ✅ Formats UI display */}
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
