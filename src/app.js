require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'NBA Backend API is running!',
    version: '1.0.0',
    endpoints: {
      players: '/api/players',
      teams: '/api/teams',
      games: '/api/games',
      standings: '/api/standings',
      player_teams: '/api/player_teams'
    }
  });
});

// API Routes
app.use('/api', routes);

// Error Handler Middleware (harus di paling bawah)
app.use(errorHandler);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
