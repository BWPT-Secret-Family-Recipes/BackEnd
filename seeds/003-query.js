
exports.seed = function(knex, Promise) {
 
      return knex('query').insert([
        {user_id: 1, recipe_id: 1},
      ]);
 
};
