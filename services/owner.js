'use strict';

var OwnerSchema = require('../models').model('Owner');

function Owner() {
}

Owner.prototype = (function () {
    var find = function (id, callback) {
            var query = {"_id": id};
            OwnerSchema.findOne(query, function (error, owner) {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, owner);
            });
        },

        findAll = function (callback) {
            OwnerSchema.find(function (error, owners) {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, owners);
            });
        },

        findOneWhere = function (query, callback) {
            OwnerSchema.findOne(query, function (error, owner) {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, owner);
            });
        },

        findWhere = function (query, callback) {
            OwnerSchema.find(query, function (error, owners) {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, owners);
            });
        },

        create = function (data, callback) {
            var query = {'firstName': data.firstName, 'lastName': data.lastName},
                owner = new OwnerSchema(data);

            OwnerSchema.findOne(query, function (error, _owner) {
                if (error) {
                    return callback(error, null);
                }

                if (_owner != null) {
                    return callback({message: 'Owner already exits'}, null);
                }

                owner.save(function (error, o) {
                    if (error) {
                        return callback(error, null);
                    }
                    return callback(null, o);
                });
            });
        };

    return {
        "create": create,
        "find": find,
        "findAll": findAll,
        "findOneWhere": findOneWhere,
        "findWhere": findWhere
    };
}());

module.exports = new Owner();