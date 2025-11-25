require('dotenv').config();
const express = require('express');
const supabase = require('./supabase');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'NBA Backend API is running!' });
});

// ========== PLAYERS ENDPOINTS ==========
// GET all players
app.get('/api/players', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*');

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET single player by ID
app.get('/api/players/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// POST - Create new player
app.post('/api/players', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('players')
      .insert(req.body)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update player by ID
app.put('/api/players/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('players')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete player by ID
app.delete('/api/players/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('players')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'Player deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// ========== TEAMS ENDPOINTS ==========
// GET all teams
app.get('/api/teams', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('teams')
      .select('*');

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET single team by ID
app.get('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// POST - Create new team
app.post('/api/teams', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('teams')
      .insert(req.body)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update team by ID
app.put('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('teams')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete team by ID
app.delete('/api/teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('teams')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'Team deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// ========== GAMES ENDPOINTS ==========
// GET all games
app.get('/api/games', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('games')
      .select('*');

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET single game by ID
app.get('/api/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// POST - Create new game
app.post('/api/games', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('games')
      .insert(req.body)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update game by ID
app.put('/api/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('games')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete game by ID
app.delete('/api/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('games')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'Game deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// ========== STANDINGS ENDPOINTS ==========
// GET all standings
app.get('/api/standings', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('standings')
      .select('*');

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET single standing by ID
app.get('/api/standings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('standings')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// POST - Create new standing
app.post('/api/standings', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('standings')
      .insert(req.body)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update standing by ID
app.put('/api/standings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('standings')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete standing by ID
app.delete('/api/standings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('standings')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'Standing deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// ========== PLAYER_TEAMS ENDPOINTS ==========
// GET all player_teams
app.get('/api/player_teams', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('player_teams')
      .select('*');

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET single player_team by ID
app.get('/api/player_teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('player_teams')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// POST - Create new player_team
app.post('/api/player_teams', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('player_teams')
      .insert(req.body)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// PUT - Update player_team by ID
app.put('/api/player_teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('player_teams')
      .update(req.body)
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - Delete player_team by ID
app.delete('/api/player_teams/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('player_teams')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ success: true, message: 'Player team relation deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
