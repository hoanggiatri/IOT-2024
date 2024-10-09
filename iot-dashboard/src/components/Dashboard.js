// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material"; 
import TemperatureCard from "./TemperatureCard";
import HumidityCard from "./HumidityCard";
import GasDetectionCard from "./GasDetectionCard"; 
import SwitchControl from "./SwitchControl";
import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import "../css/Dashboard.css"; 

const Dashboard = () => {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [gasLevel, setGasLevel] = useState(0);
  const [temperatureData, setTemperatureData] = useState([]); // Dữ liệu lịch sử nhiệt độ
  const [humidityData, setHumidityData] = useState([]); // Dữ liệu lịch sử độ ẩm

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/latest-data");
        const data = await response.json();
        setTemperature(data.Temperature);
        setHumidity(data.Humidity);
        setGasLevel(data.GasLevel);
      } catch (error) {
        console.error("Error fetching latest data: ", error);
      }
    };

    const fetchTemperatureData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/temperature-data");
        const data = await response.json();
        console.log(data)
        // Tách dữ liệu nhiệt độ từ API
        const tempData = data.map(item => ({
          time: new Date(item.time).toLocaleString(), // Định dạng thời gian
          temperature: item.temperature,
        }));
        setTemperatureData(tempData);
      } catch (error) {
        console.error("Error fetching temperature data: ", error);
      }
    };

    const fetchHumidityData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/humidity-data");
        const data = await response.json();
        
        // Tách dữ liệu độ ẩm từ API
        const humData = data.map(item => ({
          time: new Date(item.time).toLocaleString(), // Định dạng thời gian
          humidity: item.humidity,
        }));

        setHumidityData(humData);
      } catch (error) {
        console.error("Error fetching humidity data: ", error);
      }
    };

    fetchLatestData();
    fetchTemperatureData();
    fetchHumidityData();
  }, []);

  return (
    <div className="dashboard-container"> 
      <h1 className="dashboard-title">IoT Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SwitchControl />
        </Grid>
        <Grid item xs={4}>
          <TemperatureCard temperature={temperature} />
        </Grid>
        <Grid item xs={4}>
          <HumidityCard humidity={humidity} />
        </Grid>
        <Grid item xs={4}>
          <GasDetectionCard gasLevel={gasLevel} />
        </Grid>
        <Grid item xs={6}>
          <TemperatureChart data={temperatureData} /> {/* Biểu đồ nhiệt độ */}
        </Grid>
        <Grid item xs={6}>
          <HumidityChart data={humidityData} /> {/* Biểu đồ độ ẩm */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
