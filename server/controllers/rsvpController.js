const { supabase } = require("../config/supabaseClient");
const { sendMail } = require("../config/nodemailerConfig");

const handleRSVP = async (req, res) => {
  const { name, email, guest_count } = req.body;
  console.log("Received RSVP", name, email, guest_count);

  try {
    const { data, error } = await supabase
      .from("rsvps")
      .insert([{ name, email, guest_count }]);
    console.log("Inserting into rsvps:", { name, email, guest_count });

    if (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to save RSVP. Please try again" });
    }

    const subject = "RSVP Confirmation";
    const message = `
    <h1>Thank you for RSVPing, ${name}</h1>
    <p>We have received your RSVP for ${guest_count} guest(s)</p>
    <p>The event is <strong>November 2, 2024</strong> at <strong>4544 W. Harvest Moon Dr. South Jordan, UT 84009 - Conference Room A</strong> from <strong>2:30 PM to 4:30 PM</strong></p>
    <p>For any questions or concerns, contact Mya at 385-477-7717</p>
    <p>We look forward to seeing you at the Sip & See!</p>
    `;

    try {
      await sendMail(email, subject, message);
      console.log("Email sent successfully:", email);
    } catch (emailError) {
      console.error("Failed sending confirmation Email:", emailError);
      return res.status(500).json({
        message:
          "RSVP saved, but there was an error sending the confirmation email",
      });
    }

    res
      .status(201)
      .json({
        message: "RSVP saved successfully! A confirmation email has been sent.",
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
};
module.exports = { handleRSVP };
