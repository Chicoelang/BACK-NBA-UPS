const supabase = require('../config/supabase');

class Team {
  static async findAll() {
    const { data, error } = await supabase
      .from('teams')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create(teamData) {
    const { data, error } = await supabase
      .from('teams')
      .insert(teamData)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async update(id, teamData) {
    const { data, error } = await supabase
      .from('teams')
      .update(teamData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async delete(id) {
    const { error } = await supabase
      .from('teams')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

module.exports = Team;
