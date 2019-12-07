var http = require( "http" );
var server = http.createServer();

server.addListener( "request", function( request, response ) {
	response.writeHead( 200, { "content-type" : "text/plain" } );
	response.write( "hello nodejs" );
	response.end();
} );

server.addListener( "connection", function( socket ) {
	console.log( "connected ... " );
} );

server.listen( 8888 );