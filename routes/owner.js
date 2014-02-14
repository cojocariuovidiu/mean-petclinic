'use strict';

var logger = require('../logger'),
    owner = require('../services').owner;

exports.create = function (req, res) {
    var data = req.body;
    owner.create(data, function (err, _owner) {
        if (err) {
            return res.json(500, err);
        }
        return res.json(_owner);
    });
};

exports.details = function (req, res) {
    var id = req.params.id;
    owner.find(id, function (err, owner) {
        if (err) {
            return res.json(500, err);
        }
        return res.json(owner);
    });
};

exports.list = function (req, res) {
    owner.findAll(function (err, owners) {
        if (err) {
            return res.json(500, err);
        }
        return res.json(owners);
    });
};

exports.remove = function (req, res) {
    res.send(200);
};

exports.search = function (req, res) {
    var term = req.params.term,
        context = req.params.context,
        query = {};
    query[term.toString()] = context;
    owner.findWhere(query, function (err, owners) {
        if (err) {
            return res.json(500, err);
        }
        return res.json(owners);
    });
};

exports.update = function (req, res) {
    res.send(200);
};