const http = require( "http" );
const express = require( "express" );
const getmac = require( "getmac" );
const arp = require( "node-arp" );

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer( (req, res) => {
  res.statusCode = 200;
  res.setHeader( "Content-Type", "text/plain" );
  res.end( "Hello World\n" );
});

server.listen(port, hostname, () => {
  console.log( `Server running at http://${hostname}:${port}/` );
});

const app = express();

// app.use( "/", ( req, res, next ) => {
// 	res.send( `What's Up?` );
// });

app.use( "/getmac1", ( req, res, next ) => {
	console.log( req.connection.remoteAddress );
	console.log( "getmac1" );

	getmac.getMac( (err, mac) => {
		if ( err ) console.log( err );
		console.log( mac );
		res.send( `Mac Address : ${mac}` );
	})
});

app.use( "/getmac2", ( req, res, next ) => {
	console.log( "getmac2" );

	let ipAddr = req.connection.remoteAddress;
	console.log( ipAddr );
		ipAddr = ipAddr.split( ":" )[ 3 ];

	console.log( `ipAddr : ${ipAddr}` );

	arp.getMAC( ipAddr, ( err, mac ) => {
	// arp.getMAC( "1.212.71.98", ( err, mac ) => {
	    if ( err ) console.log( err );
	    console.log( mac );
	    res.send( `Mac Address : ${mac}` );
	});
});

app.use( "/getmac3", ( req, res, next ) => {
	var ipAddr = "1.212.71.98";
	// var ipAddr = "192.168.1.9";
	arp.getMAC( ipAddr, ( err, mac ) => {
	// arp.getMAC( "1.212.71.98", ( err, mac ) => {
	    if ( err ) console.log( err );
	    console.log( mac );
	    res.send( `Mac Address : ${mac}` );
	});
});

app.listen( port );