const supabase = require('../config/supabase');

class Player {
  static async findAll() {
    const { data, error } = await supabase
      .from('players')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create(playerData) {
    const { data, error } = await supabase
      .from('players')
      .insert(playerData)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async update(id, playerData) {
    const { data, error } = await supabase
      .from('players')
      .update(playerData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async delete(id) {
    const { error } = await supabase
      .from('players')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

module.exports = Player;
