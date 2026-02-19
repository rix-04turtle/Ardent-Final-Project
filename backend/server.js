const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobroutes');
const authRoutes = require('./routes/authroutes');


const app = express();
app.use(cors());
app.use(express.json());
connectDB();
//static file access in server
app.use("/uploads",express.static(path.join(__dirname, "uploads")))
app.use('/api/jobs', jobRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('api is working');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});