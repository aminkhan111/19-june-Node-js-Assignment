const express = require('express');
const app = express();
const PORT = 3000;

// Initialize counter
let counter = 0;

// Endpoint to get counter data
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
