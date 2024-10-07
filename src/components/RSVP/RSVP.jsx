import { useState } from "react";
import axios from 'axios'
import './RSVP.css'

function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:4005/rsvp', {
        name: name,
        email: email,
      });

      if (response.status === 201) {
        setMessage(response.data.message); 
      } else {
        setMessage("Something went wrong with your RSVP.");
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setMessage("Failed to send RSVP. Please try again later.");
    }
  };

  return (
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">RSVP</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default RSVPForm;
