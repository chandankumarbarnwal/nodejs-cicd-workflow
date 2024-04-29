const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hello World!- jenkins from ec2');
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}`)
);

module.exports = { app, server }; // Export both app and server
