var express = require('express'),
    http = require('http'),
    path = require('path'),
    cons = require('consolidate'),
    util = require('util'),
    db = require('./db'),
    logger = require('./logger'),
    config = require('./config'),
    routes = require('./routes'),
    utils = require('./utils'),
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
//app.use(express.csrf());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.home.index);

app.get('/owner/:id', routes.owner.details);
app.get('/owner/search/:term/:context', routes.owner.search);
app.post('/owner', routes.owner.create);
//app.put('/owner/:id', routs.owner.update);
//app.delete('/owner/:id', routes.owner.remove);

app.get('/vet/list', routes.vet.list);

http.createServer(app).listen(app.get('port'), function () {
    logger.info('Express server listening on port ' + config.get('express:port'));
});

process.on("uncaughtException", function(err) {
    exceptionDebug("uncaughtException : %s", err);
});