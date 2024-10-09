// src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDB, sql } = require("./db");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Kết nối đến cơ sở dữ liệu
connectToDB();

// API để lấy tất cả dữ liệu
app.get("/api/data", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM SensorData`;
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).send("Error fetching data");
  }
});

// API để thêm dữ liệu mới
app.post("/api/data", async (req, res) => {
  const { temperature, humidity, gasLevel } = req.body;
  try {
    await sql.query`INSERT INTO SensorData (Temperature, Humidity, GasLevel) VALUES (${temperature}, ${humidity}, ${gasLevel})`;
    res.status(201).send("Data added successfully");
  } catch (error) {
    console.error("Error inserting data: ", error);
    res.status(500).send("Error inserting data");
  }
});

// API để lấy dữ liệu mới nhất
app.get("/api/latest-data", async (req, res) => {
  try {
    // Lấy dữ liệu mới nhất từ bảng
    const result = await sql.query`
      SELECT TOP 1 Temperature, Humidity, GasLevel, Timestamp 
      FROM SensorData 
      ORDER BY Timestamp DESC
    `;
    res.json(result.recordset[0]); // Trả về bản ghi đầu tiên (mới nhất)
  } catch (error) {
    console.error("Error retrieving latest data: ", error);
    res.status(500).send("Error retrieving latest data");
  }
});

app.get("/api/temperature-data", async (req, res) => {
  try {
    const result = await sql.query(`
        SELECT TOP 10 Temperature, Timestamp 
        FROM SensorData 
        ORDER BY Timestamp DESC
      `);
    const formattedData = result.recordset.map((item) => ({
      time: new Date(item.Timestamp).toLocaleString(), // Định dạng thời gian
      temperature: item.Temperature,
    }));
    res.json(formattedData);
  } catch (error) {
    console.error("Error fetching temperature data: ", error);
    res.status(500).send("Error fetching temperature data");
  }
});

// API để lấy 10 dữ liệu độ ẩm gần nhất
app.get("/api/humidity-data", async (req, res) => {
  try {
    const result = await sql.query(`
        SELECT TOP 10 Humidity, Timestamp 
        FROM SensorData 
        ORDER BY Timestamp DESC
      `);
    const formattedData = result.recordset.map((item) => ({
      time: new Date(item.Timestamp).toLocaleString(), // Định dạng thời gian
      humidity: item.Humidity,
    }));
    res.json(formattedData);
  } catch (error) {
    console.error("Error fetching humidity data: ", error);
    res.status(500).send("Error fetching humidity data");
  }
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
