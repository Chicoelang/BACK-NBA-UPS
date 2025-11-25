const supabase = require('../config/supabase');

class Game {
  static async findAll() {
    const { data, error } = await supabase
      .from('games')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create(gameData) {
    const { data, error } = await supabase
      .from('games')
      .insert(gameData)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async update(id, gameData) {
    const { data, error } = await supabase
      .from('games')
      .update(gameData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async delete(id) {
    const { error } = await supabase
      .from('games')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

module.exports = Game;
