const { supabase } = require("../config/supabaseClient");

const handleRSVP = async (req, res) => {
  const { name, email, guest_count } = req.body;
  console.log(name, email, guest_count);

  try {
    const { data, error } = await supabase
      .from("rsvps")
      .insert([{ name, email, guest_count }]);

    if (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Failed to save RSVP. Please try again" });
    }

    res.status(201).json({ message: "RSVP saved successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
};
module.exports = { handleRSVP };
