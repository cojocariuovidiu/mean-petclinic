var UserSchema = require('../models').model('User');

function User() {
}

User.prototype = function () {
    var find = function (id, callback) {
            var query = {"_id": id};
            UserSchema.findOne(query, function (error, user) {
                if (error) return callback(error, null);
                return callback(null, user);
            });
        },

        findOneWhere = function (query, callback) {
            UserSchema.findOne(query, function (error, user) {
                if (error) return callback(error, null);
                return callback(null, user);
            });
        },

        findWhere = function (query, callback) {
            UserSchema.find(query, function (error, user) {
                if (error) return callback(error, null);
                return callback(null, user);
            });
        },

        create = function (data, callback) {
            var query = {'username': data.username};
            var user = new UserSchema(data);

            UserSchema.findOne(query, function (error, _user) {
                if (error) return callback(error, null);
                if (_user != null) return callback(null, null);

                user.save(function (error, u) {
                    if (error) return callback(error, null);
                    return callback(null, u);
                });
            });
        }

    return {
        "create": create,
        "find": find,
        "findOneWhere": findOneWhere,
        "findWhere": findWhere
    }
}();

module.exports = new User();