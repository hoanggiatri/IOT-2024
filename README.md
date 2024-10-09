Chạy FE
    npm install
Chạy BE
    tạo file .env trong src
    cd src
    node server.js



Tạo table và fake data 

CREATE TABLE SensorData (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Temperature FLOAT NOT NULL,
    Humidity FLOAT NOT NULL,
    GasLevel FLOAT NOT NULL,
    Timestamp DATETIME NOT NULL DEFAULT GETDATE()
);

INSERT INTO SensorData (Temperature, Humidity, GasLevel, Timestamp) VALUES
(25.3, 60.0, 50.0, '2024-10-01 08:00:00'),
(24.5, 55.5, 30.0, '2024-10-01 09:00:00'),
(26.7, 70.2, 70.0, '2024-10-01 10:00:00'),
(27.1, 65.0, 90.0, '2024-10-01 11:00:00'),
(28.0, 75.0, 100.0, '2024-10-01 12:00:00'),
(26.5, 80.0, 85.0, '2024-10-01 13:00:00'),
(24.0, 50.0, 20.0, '2024-10-01 14:00:00'),
(22.5, 45.0, 10.0, '2024-10-01 15:00:00'),
(23.0, 60.0, 60.0, '2024-10-01 16:00:00'),
(25.0, 55.0, 30.0, '2024-10-01 17:00:00'),
(26.5, 70.0, 80.0, '2024-10-01 18:00:00'),
(27.2, 75.0, 65.0, '2024-10-01 19:00:00'),
(28.5, 80.0, 90.0, '2024-10-01 20:00:00'),
(25.6, 55.5, 50.0, '2024-10-01 21:00:00'),
(26.8, 65.0, 40.0, '2024-10-01 22:00:00'),
(27.9, 60.0, 55.0, '2024-10-01 23:00:00'),
(28.0, 70.0, 75.0, '2024-10-02 00:00:00'),
(29.1, 75.0, 80.0, '2024-10-02 01:00:00'),
(27.3, 60.0, 65.0, '2024-10-02 02:00:00'),
(26.9, 55.0, 55.0, '2024-10-02 03:00:00'),
(25.5, 50.0, 40.0, '2024-10-02 04:00:00');
