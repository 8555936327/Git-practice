const express = require('express');
monst app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js in Docker!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

