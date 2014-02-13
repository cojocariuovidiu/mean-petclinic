'use strict';

var VetSchema = require('../models').model('Vet');

function Vet() {
}

Vet.prototype = (function () {
    var findAll = function (callback) {
        VetSchema.find(function (err, vet) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, vet);
        });
    };

    return {
        "findAll": findAll
    };
}());

module.exports = new Vet();