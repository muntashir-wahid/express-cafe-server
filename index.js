const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// ----------- //
// Middlewares
// ----------- //
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ----------- //
// Server code
// ----------- //

app.get("/", (req, res) => {
  res.send("Hello from Express Cafe server!");
});

// Start the server

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Express cafe server is running on port ${port}`);
});
