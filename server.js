const express = require('express');
const app = express();
const PORT = 3000;

const movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'The Matrix', year: 1999 },
];

app.use(express.json());

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.post('/movies', (req, res) => {
  movies.push(req.body);

  return res.status(201).json({
    message: 'movie added',
    data: req.body,
  });
});

app.use((err, req, res, next) => {
  res.json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log('http://localhost:3000');
});
