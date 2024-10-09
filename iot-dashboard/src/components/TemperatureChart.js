// src/components/TemperatureChart.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, Typography } from "@mui/material";
import "../css/TemperatureChart.css"; // Import file CSS nếu cần

// Hàm định dạng thời gian trên trục X
const formatTime = (tickItem) => {
  const date = new Date(tickItem);
  return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
};

const TemperatureChart = ({ data = [] }) => (
  <Card className="chart-card" sx={{ padding: 2, backgroundColor: "#f9f9f9" }}>
    <Typography variant="h5" style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
      Temperature Over Time
    </Typography>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="time" tickFormatter={formatTime} stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip labelFormatter={(label) => `Time: ${new Date(label).toLocaleString()}`} />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#ff5722" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default TemperatureChart;
