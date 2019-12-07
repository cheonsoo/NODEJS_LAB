var http = require( "http" );

http.get( "http://google.com", function( res ) {
	// console.log( res );
	console.log( res.headers[ "content-type" ] );
});