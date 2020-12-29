
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, name: 'Dinner'},
        {id: 2, name: 'Breakfast'},
        {id: 3, name: 'Lunch'},
        {id: 4, name: 'Brunch'},
        {id: 5, name: 'Meat'},
        {id: 6, name: 'Vegetables'},
        {id: 7, name: 'Fruits'},
        {id: 8, name: 'Desert'},
        {id: 9, name: 'Poultry'},
        {id: 10, name: 'Seafood'},
        {id: 11, name: 'Beef'},
        {id: 12, name: 'Beverages'},
        {id: 13, name: 'Turkey'},
        {id: 14, name: 'Sausage'},
      ]);
    });
};
