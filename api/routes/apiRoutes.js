const express = require('express');

const UserRouter = require('../auth/users/user-router');
const AuthRouter = require('../auth/auth-router');
const Restricted = require('../auth/restricted-middleware');
const RecipeRouter = require('../content/recipes/recipe-router');


const router = express.Router();

router.use('/users',Restricted, UserRouter);
router.use('/auth', AuthRouter);
router.use('/recipe', Restricted, RecipeRouter)




module.exports = router;