

import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button, Box, Dialog, DialogContent, DialogActions } from '@mui/material';

const ProductList = ({ products, addToCart }) => {
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handleImageClick = (image) => {
    setPreviewImage(image);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginTop: '15px' }}>
            <Card style={{ margin: '10px', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,4.1)' }}>
              <CardMedia
                component="img"
                height="240"
                width="200"
                image={require(`../assets/${product.image}`)} 
                alt={product.name}
                style={{ objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => handleImageClick(require(`../assets/${product.image}`))}
              />
              <CardContent sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }} >
                {/* <Typography variant="h5" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{product.name}</Typography> */}
                <Typography variant="h5" style={{ color:'red',font: 'italic bold 20px/1.5 "Times New Roman", Times, serif' }}>{product.name}</Typography>

                <Typography variant="h6"style={{ font: 'bold 20px/1.5 "Times New Roman", Times, serif' }}>₹{product.price.toFixed(2)}</Typography>
                <Typography variant="body2">Stock: {product.stock}</Typography>
                <Button
                  style={{ backgroundColor: 'black', color: 'white',marginTop: '10px' }}
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

      <Dialog open={openPreview} onClose={handleClosePreview}>
        <DialogContent style={{ textAlign: 'center' }}>
          <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductList;

