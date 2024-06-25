import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
// import products from '../data/products'; // Assuming products.js is in src/data folder

const ProductList = ({ products, addToCart }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginTop :'15px',borderRadious:'90px',borderColor:'red'}} >
            <Card style={{ margin: '10px', maxWidth: '400px', borderColor:'red',borderRadious:'90px'}}>
            <CardMedia
                component="img"
                height="240"
                width="200"
                image={require(`../assets/${product.image}`)} // Dynamic import based on product.image
                alt={product.name}
                style={{ objectFit: 'content', }} 
                
                // Inline style for object-fit: cover
              />
              <CardContent sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="h6">₹{product.price.toFixed(2)}</Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Button
                  // variant="contained"
                  // color="primary" 
                  style={{ backgroundColor: 'black' ,color:'white'}}
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
