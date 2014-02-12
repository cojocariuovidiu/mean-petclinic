var nconf = require('nconf'),
    path = require('path');

function Config() {
    var environment;
    nconf.argv().env('_');
    environment = nconf.get("NODE:ENV") || "development";
    nconf.file(environment, path.join(process.cwd(), "/configs/", environment + ".json"));
    nconf.file("default", path.join(process.cwd(), "/configs/default.json"));
}

Config.prototype.get = function (key) {
    return nconf.get(key);
};

module.exports = new Config();

