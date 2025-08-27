const express = require('express');
const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Express');
// });
// ! dinamyc rout
// app.get('/product/:id', (req, res) => {
//   console.log(req.params.id);
//   res.send(`your: ${req.params.id}`);
// });
// ! search params
// app.get('/product/search', (req, res) => {
//   console.log(req.query);
//   res.send('query string');
// });
// ! json
// app.get('/', (req, res) => {
//   res.json([
//     { message: 'Welcome', author: 'Giorgi' },
//     { message: 'Welcome', author: 'Giorgi' },
//   ]);
// });
//! middlewear
app.
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
