// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ status: "App is live using PM2 and GitHub Actions!" });
});

app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});
