const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// POST route for handling form submissions
app.post("/join", (req, res) => {
  // Extract data from request body
  const { name, email } = req.body;
  console.log(`New member joined: ${name}, Email: ${email}`);
  // Here you can add code to handle the data, e.g., store it in a database

  res.send("Thank you for joining our community!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
