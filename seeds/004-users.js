
exports.seed = function(knex, Promise) {

      return knex('users').insert([
        {id: 1, username: 'admin', password: 'ungabunga', email: 'admin@ad.com'}
       
      ]);
  
};
