const express = require("express");
const users = require('../auth/users/user-model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const generateToken = require("../../config/token");

router.post('/register', async (req, res) => {

    const user = req.body;
  
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    try {
        const saved = await users.add(user);
        res.status(201).json(saved);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    try {
        const user = await users.findBy({ username }).first();
    
        if (user && bcrypt.compareSync(password, user.password)) {
         const token = generateToken(user);
         const user_id = user.id
            res.status(200).json({ message: `Welcome ${user.username}!`, user_id, token});
        } else {
       
            res.status(401).json({ message: 'invalid credentials' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// router.delete('/logout', (req, res) => {
//     if (req.session) {
    
//         req.session.destroy((err) => {
//             if (err) {
//                 res.status(400).json({ message: 'error logging out:', error: err });
//             } else {
//                 res.json({ message: 'logged out' });
//             }
//         });
//     } else {
//         res.end();
//     }
// });


module.exports = router;