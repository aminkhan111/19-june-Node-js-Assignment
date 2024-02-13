const express = require('express');
const app = express();
const PORT = 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send('<div style="text-align: center;"><h2>I am homepage</h2></div>');
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send('<div style="text-align: center;"><h2>I am about page</h2></div>');
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.send('<div style="text-align: center;"><h2>Email: support@pwskills.com</h2></div>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
