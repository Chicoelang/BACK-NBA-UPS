const Game = require('../models/Game');

// Get all games
const getAllGames = async (req, res, next) => {
  try {
    const data = await Game.findAll();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Get single game by ID
const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Game.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Create new game
const createGame = async (req, res, next) => {
  try {
    const data = await Game.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Update game by ID
const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Game.update(id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Delete game by ID
const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Game.delete(id);
    res.json({ success: true, message: 'Game deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame
};
