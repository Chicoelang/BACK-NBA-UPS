const Team = require('../models/Team');

// Get all teams
const getAllTeams = async (req, res, next) => {
  try {
    const data = await Team.findAll();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Get single team by ID
const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Team.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Create new team
const createTeam = async (req, res, next) => {
  try {
    const data = await Team.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Update team by ID
const updateTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Team.update(id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Delete team by ID
const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Team.delete(id);
    res.json({ success: true, message: 'Team deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam
};
