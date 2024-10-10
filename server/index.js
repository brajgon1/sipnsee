const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = 4005;

// controllers
const { handleRSVP } = require("./controllers/rsvpController");

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.post("/rsvp", handleRSVP);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
