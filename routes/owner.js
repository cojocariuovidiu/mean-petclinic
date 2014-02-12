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

exports.update = function (req, res) {
    res.send(200);
};

exports.remove = function (req, res) {
    res.send(200);
}

exports.search = function (req, res) {
    res.send(200);
}