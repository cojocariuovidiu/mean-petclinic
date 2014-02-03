var winston = require('winston'),
    config = require('../configuration');

function Logger() {
    return new winston.Logger({
        transports: [
            new winston.transports.Console({
                handleExceptions: true,
                json: config.get('logger:json'),
                level: config.get('logger:level')
            }),
            new winston.transports.File({
                filename: config.get('logger:filename'),
                maxsize: 1048576,
                maxFiles: 3,
                level: config.get('logger:level'),
                json: config.get('logger:json')
            })
        ],
        exitOnError: false
    });
}

module.exports = new Logger();