const model = require('../models');

// console.log("model inside controller", model, model.getAllCats);

module.exports = {
  getAllCats: async function(req, res) {
    try {
      const cats = await model.getAllCats();
      res.status(200).json(cats);
    } catch (error) {
      res.status(500).json({error: 'Error getting cats:', error});
    }
  },

  getOneCat: async function(req, res) {
    try {
      const id = [req.params.id];
      const cat = await model.getOneCat(id);
      res.status(200).json(cat);
    } catch (error) {
      res.status(500).json({error: 'Error getting cat:', error});
    }
  }
};