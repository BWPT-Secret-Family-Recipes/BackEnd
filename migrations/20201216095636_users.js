exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments()
      table.text('username').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('category', function(table) {
      table.increments()
      table.string('category_name').unique().notNullable()
    }).createTable('recipe', function(table) {
      table.increments()
      table.string('title').notNullable()
      table.string('ingredients').notNullable()
      table.string('instructions').notNullable()
      table.integer('category_id').unsigned().notNullable().references('category.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    }).createTable('query', function(table) {
      table.integer('user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('recipe_id').unsigned().notNullable().references('recipe.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.primary(['user_id', 'recipe_id'])

    })
    
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('query').dropTable('recipe').dropTable('category').dropTable('users');
  };
  