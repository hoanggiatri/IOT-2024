import React from "react";
import { Card, Typography } from "@mui/material";
import SmokeFreeIcon from '@mui/icons-material/SmokeFree'; // Import biểu tượng phát hiện khí gas
import "../css/GasDetectionCard.css"; // Import file CSS

const GasDetectionCard = ({ gasLevel }) => (
  <Card className="gas-detection-card">
    <Typography variant="h5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SmokeFreeIcon style={{ marginRight: "8px" }} />
      Gas Detection
    </Typography>
    <Typography variant="h2">{gasLevel} ppm</Typography>
  </Card>
);

export default GasDetectionCard;
