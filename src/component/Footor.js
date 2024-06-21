// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: 'primary.main',
//         color: 'white',
//         padding: '10px 20px',
//         marginTop: '20px',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="body1">
//         &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Privacy Policy
//         </Link>{' '}
//         |{' '}
//         <Link href="#" color="inherit">
//           Terms of Service
//         </Link>
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '10px 20px',
        marginTop: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} bfhewbcbsdajvbskjvberawkjgvb
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
