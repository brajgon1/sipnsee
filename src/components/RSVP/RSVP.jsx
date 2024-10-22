import { useState } from "react";
import axios from "axios";
import "./RSVP.css";

function RSVPForm() {
  return (
    <div className="container">
      <div className="invitation-text">
        <h2>RSVP Information</h2>
        <p>Please RSVP by texting or calling: <strong>385-309-7172</strong></p>
        <p>Please include your name, email address, and preferred party size.</p>
      </div>
    </div>
  );
}

export default RSVPForm;
