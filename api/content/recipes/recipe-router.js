const express = require("express");
const recipes = require('./recipe-model');

const router = express.Router();


// router.get("/", async (req, res) => {
//   try {
//     const recipe = await recipes.find();
//     res.json(recipe);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'error with db', error: err });
//   }
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await recipes.findById(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'invalid id' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
});

router.get('/:id/recipe', async (req, res) => {
  const { id } = req.params;

  try {
    const content = await recipes.findRecipe(id);
    res.json(content);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
})



router.post('/', async (req, res) => {

    const recipe = req.body;

    try {
        const saved = await recipes.add(recipe);
        res.status(201).json(saved);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const changedRecipe = await recipes.update(id, changes);
    if (changedRecipe) {
      res.json(changedRecipe);
    } else {
      res.status(404).json({ message: 'invalid id' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const count = await recipes.remove(id);
    if (count) {
      res.json({ message: `deleted ${count} records` });
    } else {
      res.status(404).json({ message: 'invalid id' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
});

module.exports = router;