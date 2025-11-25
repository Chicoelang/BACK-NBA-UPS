const Player = require('../models/Player');

// Get all players
const getAllPlayers = async (req, res, next) => {
  try {
    const data = await Player.findAll();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Get single player by ID
const getPlayerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Player.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Create new player
const createPlayer = async (req, res, next) => {
  try {
    const data = await Player.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Update player by ID
const updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Player.update(id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Delete player by ID
const deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Player.delete(id);
    res.json({ success: true, message: 'Player deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer
};
