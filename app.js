var express = require('express'),
    http = require('http'),
    path = require('path'),
    cons = require('consolidate'),
    util = require('util'),
    db = require('./lib/db'),
    auth = require('./lib/authentication'),
    logger = require('./lib/logger'),
    config = require('./lib/configuration'),
    routes = require('./lib/routes'),
    utils = require('./lib/utils'),
    app = express();

app.engine('html', cons.handlebars);
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(auth.passport.initialize());
app.use(auth.passport.session());
app.use(express.csrf());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(utils.response.redirect('/'));
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.home.index);

http.createServer(app).listen(app.get('port'), function () {
    logger.info('Express server listening on port ' + config.get('express:port'));
});