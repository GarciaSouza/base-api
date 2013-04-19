var restify = require('restify')
	, passport = require('passport')
  , config = require('config')
  , api = require('./api')

var server = restify.createServer({
	name: 'base-api',
  version: '0.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({mapParams:false}));
server.use(restify.bodyParser({mapParams:false}));
server.use(passport.initialize());
server.use(passport.session());

//api.User.createApi(server);

server.listen(config.port, function(){
	console.log('%s listening at %s', server.name, server.url);
});
