exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-update3', function(table) {
      table.increments();
      table.string('title').notNullable();
      table.string('source').unsigned().references('username').inTable('users');
      table.string('igredients').notNullable();
      table.string('instructions').notNullable();
      table.string('tags');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
    
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('recipe-update3');
  };