
exports.seed = function(knex, Promise) {

      return knex('category').insert([
        {category_name: 'Breakfast'},
        {category_name: 'Lunch'},
        {category_name: 'Dinner'}
      ]);
  
};
