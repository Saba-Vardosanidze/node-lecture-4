const express = require('express');
// გაძლევს რექვესტზე დამატებით ინფორმაციებს
const morgan = require('morgan');
// ახსნა 17 ხაზზე
const cors = require('cors');
const app = express();

const PORT = 3000;

// jsons გამოართმევს და გაატანს object ს
app.use(express.json());

app.use(express.static('public'));

app.use(morgan('dev'));

// ფრჩხილებში რასაც დავწერთ მხოლოდ იმას შეუძლია რექვესტის გაგზავნა
app.use(cors());

app.use((req, res, next) => {
  console.log(`[custome]: ${req.method}, ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.send('welcome');
});

// application level middleware

const users = [
  { id: 1, username: 'saba', role: 'user' },
  { id: 2, username: 'lekoo', role: 'admin' },
];

const adminMiddleware = (req, res, next) => {
  const user = users[1];
  if (user.role !== 'admin') {
    return res.status(403).json({ message: 'nouu' });
  }
  next();
};

app.get('/admin', adminMiddleware, (req, res) => {
  res.send('admin page');
});

app.get();

app.use((err, req, res, next) => {
  res.json({
    message: err,
  });
});

//post request
const books = [
  { id: 1, name: 'saba', author: 'user' },
  { id: 2, name: 'lekoo', author: 'admin' },
];

app.use(express.json());

app.post('/book', (req, res) => {
  console.log(req.body);
  books.push(req.body);

  return res.status(201).json({
    message: 'book added succsesfull',
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log('http://localhost:3000');
});
