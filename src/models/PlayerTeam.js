const supabase = require('../config/supabase');

class PlayerTeam {
  static async findAll() {
    const { data, error } = await supabase
      .from('player_teams')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from('player_teams')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create(playerTeamData) {
    const { data, error } = await supabase
      .from('player_teams')
      .insert(playerTeamData)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async update(id, playerTeamData) {
    const { data, error } = await supabase
      .from('player_teams')
      .update(playerTeamData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async delete(id) {
    const { error } = await supabase
      .from('player_teams')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

module.exports = PlayerTeam;
