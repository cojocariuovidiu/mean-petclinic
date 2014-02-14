'use strict';

var OwnerSchema = require('../models').model('Owner');

function Owner() {
}

Owner.prototype = (function () {
    var create = function (data, callback) {
            var query = {'firstName': data.firstName, 'lastName': data.lastName},
                owner = new OwnerSchema(data);

            OwnerSchema.findOne(query, function (err, _owner) {
                if (err) {
                    return callback(err, null);
                }

                if (_owner != null) {
                    return callback({message: 'Owner already exits'}, null);
                }

                owner.save(function (err, o) {
                    if (err) {
                        return callback(err, null);
                    }
                    return callback(null, o);
                });
            });
        },
        find = function (id, callback) {
            var query = {'_id': id};
            OwnerSchema.findOne(query, function (err, owner) {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, owner);
            });
        },
        findAll = function (callback) {
            OwnerSchema.find(function (err, owners) {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, owners);
            });
        },
        findOneWhere = function (query, callback) {
            OwnerSchema.findOne(query, function (err, owner) {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, owner);
            });
        },
        findWhere = function (query, callback) {
            OwnerSchema.find(query, function (err, owners) {
                if (err) {
                    return callback(err, null);
                }
                return callback(null, owners);
            });
        },
        update = function (data, callback) {
            OwnerSchema.findOne({'_id': data._id}, function (err, owner) {
                if (err) {
                    return callback(err, null);
                }

                if (owner == null) {
                    return callback({message: 'Owner does not exist'}, null);
                }

                owner.firstName = data.firstName;
                owner.lastName = data.lastName;
                owner.address = data.address;
                owner.city = data.city;
                owner.telephone = data.telephone;

                owner.save(function (err) {
                    if (err) {
                        return callback(err, null);
                    }
                    return callback(null, null);
                });
            });
        };

    return {
        "create": create,
        "find": find,
        "findAll": findAll,
        "findOneWhere": findOneWhere,
        "findWhere": findWhere,
        "update": update
    };
}());

module.exports = new Owner();