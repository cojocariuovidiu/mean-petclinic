var OwnerSchema = require('../models').model('Owner');

function Owner() {
}

Owner.prototype = function () {
    var find = function (id, callback) {
            var query = {"_id": id};
            OwnerSchema.findOne(query, function (error, owner) {
                if (error) return callback(error, null);
                return callback(null, owner);
            });
        },

        findOneWhere = function (query, callback) {
            OwnerSchema.findOne(query, function (error, owner) {
                if (error) return callback(error, null);
                return callback(null, owner);
            });
        },

        findWhere = function (query, callback) {
            OwnerSchema.find(query, function (error, owner) {
                if (error) return callback(error, null);
                return callback(null, owner);
            });
        },

        create = function (data, callback) {
            var query = {'firstName': data.firstName, 'lastName': data.lastName};
            var owner = new OwnerSchema(data);

            OwnerSchema.findOne(query, function (error, _owner) {
                if (error) return callback(error, null);
                if (_owner != null) return callback(null, null);

                owner.save(function (error, o) {
                    if (error) return callback(error, null);
                    return callback(null, o);
                });
            });
        };

    return {
        "create": create,
        "find": find,
        "findOneWhere": findOneWhere,
        "findWhere": findWhere
    };
}();

module.exports = new Owner();