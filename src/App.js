
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from '@mui/material';
// import ProductList from './component/productList';
// import Cart from './component/Cart';
// import Navbar from './component/Navbar';
// import Hero from './component/Hero';
// import Footer from './component/Footor';
// import productsData from './data/products';
// import axios from 'axios';
// useEffect(() => {
//   const fetchData = async () => {
//     const result = await axios.get('http://localhost:8000'); // Replace with your Node.js server URL
//     setData(result.data);
//   };

//   fetchData();
// }, []);
// function App() {
//   const [products, setProducts] = useState(productsData);
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const productInCart = cart.find((item) => item.id === product.id);
//     if (product.stock > 0) {
//       if (productInCart) {
//         setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
//       } else {
//         setCart([...cart, { ...product, quantity: 1 }]);
//       }

//       setProducts(products.map((item) => (item.id === product.id ? { ...item, stock: item.stock - 1 } : item)));
//     } else {
//       alert('Product is out of stock');
//     }
//   };

//   const removeFromCart = (productId) => {
//     const productInCart = cart.find((item) => item.id === productId);
//     if (productInCart) {
//       if (productInCart.quantity > 1) {
//         setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
//       } else {
//         setCart(cart.filter((item) => item.id !== productId));
//       }

//       setProducts(products.map((item) => (item.id === productId ? { ...item, stock: item.stock + 1 } : item)));
//     }
//   };

//   const submitOrder = (formData) => {
//     console.log('Order Submitted:', formData, cart);
//     setCart([]);
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Hero />
//       <Container>
//         <Routes>
//           <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
//           <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} submitOrder={submitOrder} />} />
//         </Routes>
//       </Container>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import ProductList from './component/productList';
import Cart from './component/Cart';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footor'; // Corrected import name
import productsData from './data/products';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8000'); // Replace with your Node.js server URL
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (product.stock > 0) {
      if (productInCart) {
        setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      setProducts(products.map((item) => (item.id === product.id ? { ...item, stock: item.stock - 1 } : item)));
    } else {
      alert('Product is out of stock');
    }
  };

  const removeFromCart = (productId) => {
    const productInCart = cart.find((item) => item.id === productId);
    if (productInCart) {
      if (productInCart.quantity > 1) {
        setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
      } else {
        setCart(cart.filter((item) => item.id !== productId));
      }

      setProducts(products.map((item) => (item.id === productId ? { ...item, stock: item.stock + 1 } : item)));
    }
  };

  const submitOrder = (formData) => {
    console.log('Order Submitted:', formData, cart);
    setCart([]);
  };

  return (
    <Router>
      <Navbar />
      <Hero />
      <Container>
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} submitOrder={submitOrder} />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
