const db = require('../../../data/db-config');

 module.exports = {
    find,
    findBy,
    add,
    update,
    remove
}
 
 function find() {
    return db("recipe-update").select("id", "title", "source", "instructions", "igredients", "tags").orderBy("id");
  }


function findBy(filter) {
    return db("recipe-update").where(filter).orderBy("id");
  }





async function add(recipe) {
  try {
    const [id] = await db("recipe-update").insert(recipe, "id", "title", "source", "instructions", "igredients", "tags");

    return findById(id);
  } catch (error) {
    throw error;
  }
}


async function update(id, changes) {
    try {
        await db('recipe-update').where({ id }).update(changes);
        return await findById(id);
    } catch (err) {
        throw err;
    }
}

async function remove(id) {
    try {
        return await db('recipe-update').del().where({ id });
    } catch (err) {
        throw err;
    }
}