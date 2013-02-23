
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get('/', function(req, res){
	res.render('index',{
		title : 'Turismo En El Salvador'
	});
});

app.get('/galeria', function(req, res){
	res.render('galeria',{
		title : 'Turismo En El Salvador'
	});
});

app.get('/mapa', function(req, res){
	res.render('mapa',{
		title : "Turismo En El Salvador"
	});
});

app.get('/acerca', function(req, res){
	res.render('acerca',{
		title : "Turismo En El Salvador"
	});
});

app.get('/inicio', function(req, res){
	res.render('inicio',{
		title : "Turismo En El Salvador"
	});
});

app.get('/ruta', function(req, res){
	res.render('ruta',{
		title : "Turismo En El Salvador"
	});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
