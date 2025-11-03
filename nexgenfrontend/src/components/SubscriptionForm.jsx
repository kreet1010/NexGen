import React, { useState } from "react";
import "../style/SubscriptionForm.css";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <form className="subscription-form" onSubmit={handleSubmit}>
      <div className="form-description">Email</div>
      <div className="inputfeed">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
