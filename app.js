var express     = require( "express" );
var mongoose    = require( "mongoose" );
var bodyParser  = require( "body-parser" );

var app         = express();
var port        = process.env.PORT || 8000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.set( "view engine", "ejs" );
app.use( express.static( __dirname + "/public" ) );

app.get( "/", function( req, res ) {
	res.render( "start" );
});

app.get( "/game", function( req, res ) {
	res.render( "game" );
});

app.get( "/game/:mode", function( req, res ) {
	var mode = req.params.mode;
	if ( mode === "medium" ) {
		res.render( req.params.mode );
	}
});

app.listen( port, function() {
	console.log( "Starting on port " + port );	
});