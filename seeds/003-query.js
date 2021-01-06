
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('query').del()
    .then(function () {
      // Inserts seed entries
      return knex('query').insert([
        {user_id: 1, recipe_id: 1},
      ]);
    });
};
