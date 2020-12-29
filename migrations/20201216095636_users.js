exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments()
      table.text('username').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('categories', function(table) {
      table.increments()
      table.string('name')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('recipe', function(table) {
      table.increments()
      table.string('title').notNullable()
      table.string('source').unsigned().notNullable().references('username').inTable('users')
      table.string('ingredients').notNullable()
      table.string('instructions').notNullable()
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('query', function(table) {

      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipe').onUpdate('CASCADE').onDelete('CASCADE')
      table.primary(['user_id', 'category_id', 'recipe_id'])

    })
    
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('query').dropTable('recipe').dropTable('categories').dropTable('users');
  };
  