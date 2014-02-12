var logger = require('../logger'),
    owner = require('../services').owner;

exports.create = function (req, res) {
    var owner = req.body;
    res.send(200);

//    owner.create(owner, function (err, owner) {
//        if (err) {
//            res.json(500, err);
//        }
//        res.json(owner);
//    });
}

exports.update = function (req, res) {
    res.send(200);
};

exports.remove = function (req, res) {
    res.send(200);
}

exports.search = function (req, res) {
    res.send(200);
}