// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Typography
// } from "@mui/material";
// import '../css/Navbar.css'; // Import file CSS

// const Navbar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: { 
//           width: 240, 
//           boxSizing: "border-box", 
//           backgroundColor: "#1e1e2f", // Màu nền của Navbar
//           color: "#ffffff" // Màu chữ
//         },
//       }}
//     >
//       <div style={{ padding: '20px', textAlign: 'center' }}>
//         <Typography variant="h5" style={{ color: '#ffffff', marginBottom: '20px' }}>
//           IoT Dashboard
//         </Typography>
//       </div>
//       <List>
//         <ListItem button component={Link} to="/" style={{ textDecoration: 'none' }}>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button component={Link} to="/temperature">
//           <ListItemText primary="Temperature Details" />
//         </ListItem>
//         <ListItem button component={Link} to="/humidity">
//           <ListItemText primary="Humidity Details" />
//         </ListItem>
//         <ListItem button component={Link} to="/gas-detection">
//           <ListItemText primary="Gas Detection Details" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Navbar;
