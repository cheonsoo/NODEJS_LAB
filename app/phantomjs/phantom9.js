var phantom = require('phantom');

console.log( phantom.create );

phantom.
create(['--ignore-ssl-errors=yes', '--load-images=no']).
then(function( result ) {
	console.log( result );
});