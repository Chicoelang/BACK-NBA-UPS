const PlayerTeam = require('../models/PlayerTeam');

// Get all player_teams
const getAllPlayerTeams = async (req, res, next) => {
  try {
    const data = await PlayerTeam.findAll();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Get single player_team by ID
const getPlayerTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await PlayerTeam.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Create new player_team
const createPlayerTeam = async (req, res, next) => {
  try {
    const data = await PlayerTeam.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Update player_team by ID
const updatePlayerTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await PlayerTeam.update(id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Delete player_team by ID
const deletePlayerTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    await PlayerTeam.delete(id);
    res.json({ success: true, message: 'Player team relation deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPlayerTeams,
  getPlayerTeamById,
  createPlayerTeam,
  updatePlayerTeam,
  deletePlayerTeam
};
