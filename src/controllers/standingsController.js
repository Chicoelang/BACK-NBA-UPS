const Standing = require('../models/Standing');

// Get all standings
const getAllStandings = async (req, res, next) => {
  try {
    const data = await Standing.findAll();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Get single standing by ID
const getStandingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Standing.findById(id);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Create new standing
const createStanding = async (req, res, next) => {
  try {
    const data = await Standing.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Update standing by ID
const updateStanding = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Standing.update(id, req.body);
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// Delete standing by ID
const deleteStanding = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Standing.delete(id);
    res.json({ success: true, message: 'Standing deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStandings,
  getStandingById,
  createStanding,
  updateStanding,
  deleteStanding
};
