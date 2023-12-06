const express = require('express');

const app = express();

const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.send('Welcome Group N');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});