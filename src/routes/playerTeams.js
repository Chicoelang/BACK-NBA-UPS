const express = require('express');
const router = express.Router();
const {
  getAllPlayerTeams,
  getPlayerTeamById,
  createPlayerTeam,
  updatePlayerTeam,
  deletePlayerTeam
} = require('../controllers/playerTeamsController');

router.get('/', getAllPlayerTeams);
router.get('/:id', getPlayerTeamById);
router.post('/', createPlayerTeam);
router.put('/:id', updatePlayerTeam);
router.delete('/:id', deletePlayerTeam);

module.exports = router;
