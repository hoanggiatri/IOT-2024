require('dotenv').config();
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: 1433,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustConnection: process.env.DB_TRUST_CONNECTION === "true",
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === "true",
  },
};

async function connectToDB() {
  try {
    await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (error) {
    console.error("Database connection failed: ", error);
  }
}

module.exports = { sql, connectToDB };
