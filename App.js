const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Load Routes
const authRoutes = require('./routes/auth');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mvc-auth').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Routes
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
