var arp = require( "node-arp" );

// 192.168.1.9(1.212.71.98) : 78:4f:43:77:7a:14
// 192.168.1.230 : 88-36-6C-F5-C1-34
// arp.getMAC( "192.168.1.9", ( err, mac ) => {
arp.getMAC( "1.212.71.98", ( err, mac ) => {
    if ( err ) console.log( err );

    console.log( mac );
});