const JwtStategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').Strategy;
const User = require('../model/user');
const config = require('../config/database');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secret0key = config.secret;
    passport.use(new JwtStategy(opts, (jwt_payload, done => {

    })));
}