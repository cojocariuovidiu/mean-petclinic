var mongoose = require('mongoose'),
    config = require('../configuration'),
    connectionString = config.get('mongo:url'),
    poolSize = config.get('mongo:poolSize'),
    options = { server: { auto_reconnect: true, poolSize: poolSize } };

mongoose.connection.open(connectionString, options);