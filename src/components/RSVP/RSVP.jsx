import { useState } from "react";
import axios from "axios";
import "./RSVP.css";

function RSVPForm({ onSubmitSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4005/rsvp", {
        name,
        email,
        guest_count: guestCount,
      });

      if (response.status === 201) {
        const successMessage =
          response.data.message || "Thank you for RSVPing!";
        setMessage(successMessage);
        if (typeof onSubmitSuccess === "function") {
          onSubmitSuccess(successMessage);
        } else {
          console.error("onSubmitSuccess is not a function");
        }
      } else {
        setMessage("Something went wrong with your RSVP.");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setMessage("Failed to send RSVP");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            placeholder="Number of guests"
            min="1"
            required
          />
        </div>
        <button type="submit">RSVP</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default RSVPForm;
