'use strict';

var logger = require('../logger'),
    vet = require('../services').vet;

exports.list = function (req, res) {
    vet.findAll(function (err, vets) {
        if (err) {
            return res.json(500, err);
        }
        return res.json(vets);
    });
};
