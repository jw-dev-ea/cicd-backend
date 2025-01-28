const express = require('express');
const app = express();
const PORT = 3000;

// Hardcoded version
const version = '1.0.1';

app.get('/version', (req, res) => {
  res.json({ version });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});