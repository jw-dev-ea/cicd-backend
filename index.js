const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = 3000;

// Hardcoded version
const version = '1.0.3';

// Enable CORS for all routes
app.use(cors());

app.get('/version', (req, res) => {
  res.json({ version });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});