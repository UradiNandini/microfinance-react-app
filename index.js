const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // You can use any port you prefer

// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a route to handle form submissions
app.post("/submit-form", (req, res) => {
  const formData = req.body; // This will contain the form data
  console.log(formData); // You can process or store the data as needed
  res.json({ message: "Form data received successfully!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
