const express = require('express');
const router = express.Router();

const playersRoutes = require('./players');
const teamsRoutes = require('./teams');
const gamesRoutes = require('./games');
const standingsRoutes = require('./standings');
const playerTeamsRoutes = require('./playerTeams');

router.use('/players', playersRoutes);
router.use('/teams', teamsRoutes);
router.use('/games', gamesRoutes);
router.use('/standings', standingsRoutes);
router.use('/player_teams', playerTeamsRoutes);

module.exports = router;
