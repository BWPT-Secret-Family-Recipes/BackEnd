
exports.seed = function(knex, Promise) {
 
      return knex('recipe').insert([
        {title: 'Test Recipe', ingredients: 'Test Ingredients', instructions: 'Test Test Test', category_id: 1, user_id: 1},
      ]);
  
};
