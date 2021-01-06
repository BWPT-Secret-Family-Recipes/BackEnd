const db = require('../../../data/db-config');

module.exports = {
    find,
    findById,
    findBy,
    findRecipe,
    add,
    update,
    remove
}


 function find() {
    return db("users").select("id", "username").orderBy("id");
  }


function findBy(filter) {
    return db("users").where(filter).orderBy("id");
  }


async function findById(id) {
    try {
        const user = await db('users').where({ id }).first();
        return user;
    } catch (err) {
        throw err;
    }
}



async function findRecipe(id) {
    try {
        const recipe = await
            db('query as q')
             .join('users as u', 'u.id', 'q.user_id')
             .join('recipe as r', 'r.id', 'q.recipe_id')
             .select('r.id', 'u.username', 'r.title', 'r.ingredients', 'r.instructions', 'r.categories', ) 
                .where({ user_id: id })
        return recipe;
    } catch (err) {
        throw err;
    }
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}


async function update(id, changes) {
    try {
        await db('users').where({ id }).update(changes);
        return await findById(id);
    } catch (err) {
        throw err;
    }
}

async function remove(id) {
    try {
        return await db('users').del().where({ id });
    } catch (err) {
        throw err;
    }
}