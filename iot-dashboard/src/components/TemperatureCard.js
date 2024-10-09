import React from "react";
import { Card, Typography } from "@mui/material";
import ThermostatIcon from '@mui/icons-material/Thermostat'; // Import biểu tượng nhiệt độ
import "../css/TemperatureCard.css"; // Import file CSS

const TemperatureCard = ({ temperature }) => (
  <Card className="temperature-card">
    <Typography variant="h5" >
      <ThermostatIcon style={{ marginRight: "8px" }} />
      Temperature
    </Typography>
    <Typography variant="h2">{temperature}°C</Typography>
  </Card>
);

export default TemperatureCard;
