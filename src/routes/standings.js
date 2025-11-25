const express = require('express');
const router = express.Router();
const {
  getAllStandings,
  getStandingById,
  createStanding,
  updateStanding,
  deleteStanding
} = require('../controllers/standingsController');

router.get('/', getAllStandings);
router.get('/:id', getStandingById);
router.post('/', createStanding);
router.put('/:id', updateStanding);
router.delete('/:id', deleteStanding);

module.exports = router;
