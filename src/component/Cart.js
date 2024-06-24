
// import React, { useState } from 'react';
// import { Button, Card, CardContent, TextField, Typography, Alert, Grid, Box } from '@mui/material';
// import axios from 'axios';

// const Cart = ({ cart = [], removeFromCart, submitOrder }) => {
//   const [formData, setFormData] = useState({
//     EMPCode:'',
//     name: '',
//     address: '',
//     email: '',
//   });
//   const [orderSubmitted, setOrderSubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const [submitDisabled, setSubmitDisabled] = useState(true);

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     validateForm({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to validate form fields
//   const validateForm = ({ name, address, email }) => {
//     if (cart.length > 0 && name.trim() !== '' && address.trim() !== '' && email.trim() !== '') {
//       setSubmitDisabled(false);
//     } else {
//       setSubmitDisabled(true);
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error message

//     if (cart.length === 0) {
//       setError('Your cart is empty. Please add some products to the cart before submitting.');
//       return;
//     }

//     if (formData.name.trim() === '' || formData.address.trim() === '' || formData.email.trim() === '') {
//       setError('Please fill out all fields (Name, Address, Email) before submitting.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/submit-order', {
//         ...formData,
//         cart,
//       });
//       console.log('Order submitted successfully:', response.data);
//       submitOrder(formData); // Optional: Update state in parent component if needed
//       setOrderSubmitted(true);
//       setTimeout(() => setOrderSubmitted(false), 3000); // Hide success message after 3 seconds
//       setFormData({ name: '', address: '', email: '' }); // Clear form data after successful submission
//       setSubmitDisabled(true); // Disable submit button after successful submission
//     } catch (error) {
//       setError('There was an error submitting the order.');
//       console.error('There was an error submitting the order:', error);
//       // Log detailed error response if available
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       }
//     }
//   };

//   return (
//     <Box sx={{ padding: '20px' }}>
//       <Typography variant="h4">Cart</Typography>
//       {cart.length === 0 ? (
//         <Typography variant="h6">Your cart is empty</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {cart.map((product, index) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//               <Card style={{ margin: '10px' }}>
//                 <CardContent>
//                   <Typography variant="h5">{product.name}</Typography>
//                   <Typography variant="h6">${product.price.toFixed(2)}</Typography>
//                   <Typography variant="body2">Quantity: {product.quantity}</Typography>
//                   <Button variant="contained" color="secondary" onClick={() => removeFromCart(product.id)}>
//                     Remove
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//       <form onSubmit={handleSubmit}>
//       <TextField
//           label="EMPCode"
//           name="EMPCode"
//           value={formData.EMPCode}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Address"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <Button type="submit" variant="contained" color="primary" disabled={submitDisabled}>
//           Submit Order
//         </Button>
//       </form>
//       {orderSubmitted && (
//         <Alert severity="success" style={{ marginTop: '10px' }}>
//           Order submitted successfully!
//         </Alert>
//       )}
//       {error && (
//         <Alert severity="error" style={{ marginTop: '10px' }}>
//           {error}
//         </Alert>
//       )}
//     </Box>
//   );
// };

// export default Cart;

import React, { useState } from 'react';
import { Button, Card, CardContent, TextField, Typography, Alert, Grid, Box } from '@mui/material';
import axios from 'axios';

const Cart = ({ cart = [], removeFromCart, submitOrder }) => {
  const [formData, setFormData] = useState({
    empcode:'',
    name: '',
    address: '',
    email: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateForm({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to validate form fields
  const validateForm = ({ name, address, email ,empcode
  }) => {
    if (cart.length > 0 && name.trim() !== '' && address.trim() !== '' && email.trim() !== '' && empcode.trim() !== '') {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
  
    if (cart.length === 0) {
      setError('Your cart is empty. Please add some products to the cart before submitting.');
      return;
    }
  
    if (formData.empcode.trim() === '' || formData.name.trim() === '' || formData.address.trim() === '' || formData.email.trim() === '') {
      setError('Please fill out all fields (EMPCode, Name, Address, Email) before submitting.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/submit-order', {
        ...formData,
        cart,
      });
      console.log('Order submitted successfully:', response.data);
      submitOrder(formData); // Optional: Update state in parent component if needed
      setOrderSubmitted(true);
      setTimeout(() => setOrderSubmitted(false), 3000); // Hide success message after 3 seconds
      setFormData({ empcode: '', name: '', address: '', email: '' }); // Clear form data after successful submission
      setSubmitDisabled(true); // Disable submit button after successful submission
    } catch (error) {
      setError('There was an error submitting the order.');
      console.error('There was an error submitting the order:', error);
      // Log detailed error response if available
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card style={{ margin: '10px' }}>
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>
                  <Typography variant="h6">₹{product.price.toFixed(2)}</Typography>
                  <Typography variant="body2">Quantity: {product.quantity}</Typography>
                  <Button variant="contained" color="secondary" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
<form onSubmit={handleSubmit}>
  <TextField
    label="EMPCode"
    name="empcode"
    value={formData.EMPCode}
    onChange={handleChange}
    fullWidth
    margin="normal"
  />
  <TextField
    label="Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    fullWidth
    margin="normal"
  />
  <TextField
    label="Address"
    name="address"
    value={formData.address}
    onChange={handleChange}
    fullWidth
    margin="normal"
  />
  <TextField
    label="Email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    fullWidth
    margin="normal"
  />
  <Button type="submit" variant="contained" color="primary" disabled={submitDisabled}>
    Submit Order
  </Button>
</form>
      {orderSubmitted && (
        <Alert severity="success" style={{ marginTop: '10px' }}>
          Order submitted successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" style={{ marginTop: '10px' }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default Cart;
