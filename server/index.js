const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4005;

// controllers
const handleRSVP = require('./rsvpController')

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.post('/rsvps', handleRSVP)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
