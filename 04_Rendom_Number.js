const express = require('express');
const app = express();

// Define a route that generates a random number
app.get('/random', (req, res) => {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // Send the random number as a JSON response
  res.json({ number: randomNumber });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
