import { useState } from "react";

function RSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data, error} = await supabase.from('rsvps').inset([{name, email}]);
    if (error) {
        console.error(error);
      } else {
        setMessage('Thank you for RSVPing! See you there!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
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
