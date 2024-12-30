const express = require('express');
<<<<<<< HEAD
monst app = express();
=======
const app = express();
>>>>>>> parent of 47c4269 (changes to my dev file)
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js in Docker!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

