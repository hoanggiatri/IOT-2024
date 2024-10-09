import React, { useState } from "react";
import { Switch, Typography } from "@mui/material";
import "../css/SwitchControl.css"; // Import file CSS

const SwitchControl = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    // Gửi tín hiệu bật/tắt tới server IoT
    fetch('http://localhost:5000/api/iot/switch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state: !isOn }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="switch-control"> {/* Sử dụng class CSS */}
      <Typography variant="h6">Air-conditioner Switch</Typography>
      <Switch checked={isOn} onChange={handleToggle} />
      <Typography variant="body1" className={`state ${isOn ? "on" : "off"}`}>
        State: {isOn ? "On" : "Off"}
      </Typography>
    </div>
  );
};

export default SwitchControl;
