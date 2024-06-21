
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
// return (
// <AppBar position="static">
// <Toolbar>
// <Typography variant="h6" style={{ flexGrow: 1 }}>
// E-Commerce
// </Typography>
// <Button color="inherit" component={Link} to="/">
// Products
// </Button>
// <Button color="inherit" component={Link} to="/cart">
// Cart
// </Button>
// </Toolbar>
// </AppBar>
// );
// };

// export default Navbar;import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
