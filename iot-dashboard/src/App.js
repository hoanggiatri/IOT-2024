// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Thay 'Switch' bằng 'Routes'
import Dashboard from './components/Dashboard';
import TemperatureDetail from './pages/TemperatureDetail';
import HumidityDetail from './pages/HumidityDetail';
import GasDetectionDetail from './pages/GasDetectionDetail';
// import Navbar from './components/Navbar';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* <Navbar /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/temperature" element={<TemperatureDetail />} />
            <Route path="/humidity" element={<HumidityDetail />} />
            <Route path="/gas-detection" element={<GasDetectionDetail />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
