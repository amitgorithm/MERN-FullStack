// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Allow frontend running at http://localhost:5175
app.use(cors({
  origin: 'http://localhost:5175', // your frontend's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// OR (for development only) allow all origins
// app.use(cors());

app.get('/api/events', (req, res) => {
  res.json([{ id: 1, name: 'Test Event' }]);
});
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/event_management')
.then(() => {
	console.log('Connected to MongoDB')
});

// Routes
app.use('/api/events', eventRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});