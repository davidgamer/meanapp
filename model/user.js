const mongoose = require('mongoose');
const bcypt = require('bcryptjs');
const config = require('../config/database');




const UserSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }


});



const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}


module.exports.getUserByUsername = function(username, callback) {
    const query = {
        username: username
    }
}


module.exports.addUser = function(newUser, callback) {
    bcypt.genSalt(10, (err, salt) => {
        bcypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });

    });

}