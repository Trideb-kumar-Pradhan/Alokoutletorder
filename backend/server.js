

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://tridebkumarp:kW51LSa1VmAep6iJ@cluster0.agavedw.mongodb.net/pdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number, // Ensure stock field is included
  image: String,
});

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  cart: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/submit-order', async (req, res) => {
  const { name, address, email, cart } = req.body;

  try {
    // Update product stock
    for (let item of cart) {
      const product = await Product.findOne({ name: item.name });
      if (product) {
        product.stock -= item.quantity; // Deduct ordered quantity from stock
        await product.save();
      }
    }

    // Create and save new order
    const newOrder = new Order({ name, address, email, cart });
    await newOrder.save();

    res.status(200).send({ message: 'Order submitted successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error submitting order', error });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
