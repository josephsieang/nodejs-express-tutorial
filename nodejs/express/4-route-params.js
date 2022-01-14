const express = require('express');
const { products } = require('./data');

const app = express();

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const targetProduct = products.find((product) => product.id === Number(productId));
  if (targetProduct) {
    res.json(targetProduct);
  } else {
    res.status(404).send('Product not exists');
  }
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});
