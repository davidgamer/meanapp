const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../model/user');




//registrar


router.post('/registro', (req, res, next) => {

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });


    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ succsess: false, msg: 'Falha ao registrar usuario' });
        } else {
            res.json({ succsess: true, msg: 'Registrado com sucesso!!!!' });
        }

    });
});

router.post('/auth', (req, res, next) => {

    res.send('Profile');
});



module.exports = router;