const db = require('../database');

module.exports = {
  getAllCats: async function() {
    try {
    const query = 'SELECT * FROM cat';
    const res = await db.query(query);
    return res.rows;
  } catch (error) {
    console.error('Error getting cats:', error);
  }
},

  getOneCat: async function(id) {
    try {
    const query = 'SELECT * FROM cat WHERE id = $1';
    const res = await db.query(query, id);
    return res.rows;
    } catch (error) {
      console.error('Error getting cat:', error);
    }
  }
};