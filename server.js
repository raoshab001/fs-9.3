const express = require('express');
const cors = require('cors');
// Optional: use mongoose if you have MongoDB Atlas
// const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Optional: connect to MongoDB Atlas if MONGODB_URI provided
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('MongoDB connect error', err));
// }

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Example API: return list of products
const products = [
  { id: 1, name: 'Wireless Mouse', price: 299 },
  { id: 2, name: 'Mechanical Keyboard', price: 499 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
