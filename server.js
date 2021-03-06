const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/seven', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, () => console.log(
  'Weather-eye is listening on port 3000!'));
