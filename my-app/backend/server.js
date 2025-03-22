const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end!' });
});

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the back-end!');
});

// Listen on all network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`Back-end app listening at http://localhost:${port}`);
});
