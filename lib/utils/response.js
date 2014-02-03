var logger = require('../logger');

exports.redirect = function (path) {
    return function (req, res, next) {
        logger.info('Route not found... Redirecting to ' + path);
        res.redirect(path);
    }
}