var getmac = require( "getmac" );


// 192.168.1.9(1.212.71.98) : 78:4f:43:77:7a:14
// 192.168.1.230 : 88-36-6C-F5-C1-34
getmac.getMac( (err, mac) => {
	if ( err ) console.log( err );
	console.log( mac );
})