
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, title: 'Test Recipe', ingredients: 'Test Ingredients', instructions: 'Test Test Test', categories: ['Dinner', 'Breakfast', 'Lunch', 'Brunch'], user_id: 1},
      ]);
    });
};
