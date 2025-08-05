import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../assets/kannan.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("Failed to send.");
      }
    } catch {
      setStatus("Failed to send.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h1>CONTACT ME</h1>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div>
              <h2>Address</h2>
              <p>48/9, Alagiri Nagar Main Road</p>
              <p>Vadapalani</p>
              <br />
              <p>Chennai-26</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <h2>Phone</h2>
              <p>+91 8072212411</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>
              <h2>Email</h2>
              <p>kannansformal@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src={myPhoto} alt="kannan" />
        </div>
      </div>
      <div className="Form">
        <h1>GET <u>IN</u> TOUCH</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          <div className="form-status">{status}</div>
        </form>
      </div>
    </section>
  );
}