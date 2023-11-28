const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use((req, res, next) => {
  const timestamp = new Date().toUTCString();
  const requestedUrl = req.originalUrl;
  console.log(`${timestamp} Requested URL: ${requestedUrl}`);
  res.send(`${timestamp} Requested URL: ${requestedUrl}`);
  next();
});


app.get('/', (req, res) => {
  res.send('This is the homepage');
});

app.get('/home', (req, res) => {
    res.send('This is the home page');
});

app.get('/product', (req, res) => {
    res.send('This is the product page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

