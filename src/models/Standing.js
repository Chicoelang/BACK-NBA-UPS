const supabase = require('../config/supabase');

class Standing {
  static async findAll() {
    const { data, error } = await supabase
      .from('standings')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase
      .from('standings')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async create(standingData) {
    const { data, error } = await supabase
      .from('standings')
      .insert(standingData)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async update(id, standingData) {
    const { data, error } = await supabase
      .from('standings')
      .update(standingData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  }

  static async delete(id) {
    const { error } = await supabase
      .from('standings')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }
}

module.exports = Standing;
