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
// route params
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const targetProduct = products.find((product) => product.id === Number(productId));
  if (targetProduct) {
    res.json(targetProduct);
  } else {
    res.status(404).send('Product not exists');
  }
});
// query params
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    res.status(200).json([]);
  } else {
    res.status(200).json(sortedProducts);
  }
});

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});
