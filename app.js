const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Serve index2.html as the homepage > it always takes index.html if index.html is there!
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "public", "index3.html"));
  const filePath = path.join(__dirname, "public", "index3.html");
  console.log("Serving file:", filePath);
  res.sendFile(filePath);
});

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
