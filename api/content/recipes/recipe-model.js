const db = require('../../../data/db-config');

 module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
}
 
 function find() {
    return db("recipe").select("id", "title", "source", "instructions", "igredients", "tags").orderBy("id");
  }


function findBy(filter) {
    return db("recipe").where(filter).orderBy("id");
  }


  async function findById(id) {
    try {
        const recipe = await db('recipe').where({ id }).first();
        return recipe;
    } catch (err) {
        throw err;
    }
}


  async function add(recipeData, id, username) {
    try {
        const recipe_ids = await db('recipe as r').join('users as u', 'u.id', 'r.user_id')
        .where({ user_id: id })
        .join('users as u', 'u.username', 'r.source' )
        .where({source: username}).insert(recipeData);
        const newRecipe = await findById(recipe_ids[0])
        return newRecipe;
    } catch (err) {
        throw err;
    }
}



async function update(id, changes) {
    try {
        await db('recipe').where({ id }).update(changes);
        return await findById(id);
    } catch (err) {
        throw err;
    }
}

async function remove(id) {
    try {
        return await db('recipe').del().where({ id });
    } catch (err) {
        throw err;
    }
}