const express = require("express");
const helmet = require('helmet');

// const session = require('express-session');
const cors = require('cors');

const ApiRouter = require('./api/routes/apiRoutes');
const recipes = require('./api/content/recipes/recipe-model');

const server = express();
// const knexSessionStore = require('connect-session-knex')(session);



// const sessionConfig = {
//     name: 'secretfamilyrecipesess',
//     secret: 'asifIdtellyouthesecretsauce',
//     cookie: {
//       maxAge: 1000 * 60 * 60,
//       secure: true, 
//       httpOnly: true
//     },
//     resave: false,
//     saveUninitialized: false,
  
//     store: new knexSessionStore(
//       {
//         knex: require("./data/db-config"),
//         tablename: "sessions",
//         sidfieldname: "sid",
//         createtable: true,
//         clearInterval: 1000 * 60 * 60
//       }
//     )
//   }
  

server.use(helmet());
server.use(express.json());

// server.use(session(sessionConfig));
server.use(cors());





server.use('/api', ApiRouter);





server.get("/", async (req, res) => {
  try {
    const recipe = await recipes.find();
    res.json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'error with db', error: err });
  }
});




module.exports = server;
