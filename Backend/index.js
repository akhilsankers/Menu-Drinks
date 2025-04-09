const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// DB connection
require("./Connection/Connect");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Backend server is running!");
});

const menuRoutes = require('./Routes/menuRoutes');
const menuItemRoutes = require('./Routes/menuItemRoutes');

app.use('/api/menu', menuRoutes);
app.use('/api/MenuItem', menuItemRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
