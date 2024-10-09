import React from "react";
import { Card, Typography } from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop'; // Import biểu tượng độ ẩm
import "../css/HumidityCard.css"; // Import file CSS

const HumidityCard = ({ humidity }) => (
  <Card className="humidity-card">
    <Typography variant="h5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <WaterDropIcon style={{ marginRight: "8px" }} />
      Humidity
    </Typography>
    <Typography variant="h2">{humidity}%</Typography>
  </Card>
);

export default HumidityCard;
