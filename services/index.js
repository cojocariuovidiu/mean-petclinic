var ignore = /.DS_Store$/,
    requireDirectory = require('require-directory');
module.exports = requireDirectory(module, __dirname, ignore);