var passport = require('passport'),
    logger = require('../logger'),
    LocalStrategy = require('passport-local').Strategy,
    user = require('../services').user;

function Authentication() {
    var self = this;
    self.passport = passport;
    self.user = user;

    self.passport.use(new LocalStrategy(
        function (username, password, done) {
            var query = { username: username, password: password };
            self.user.findOneWhere(query, function (err, user) {
                done(err, user);
            });
        }
    ));

    self.passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    self.passport.deserializeUser(function (id, done) {
        self.user.find(id, function (err, user) {
            done(err, user);
        });
    });
}

Authentication.prototype.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send(403);
}

module.exports = new Authentication();