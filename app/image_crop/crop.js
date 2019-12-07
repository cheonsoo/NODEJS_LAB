var fs = require( "fs" );
var jimp = require( "jimp" );
var exec = require('child_process').exec, child;

var { promisify } = require('util');
var sizeOf = promisify(require('image-size'));

var args = process.argv.splice( 2 );
var dir = args[ 0 ];
var flip = args[ 1 ];
// var dir = "/Users/cpark/Documents/book_to_pdf/comix/신 암행어사/신 암행어사 10권/";
// var dir = "/Users/cpark/Documents/Books_PDF/333/정비석 삼국지 01/";
// var dir = "/Users/cpark/Documents/Books_PDF/신암행어사/신 암행어사 01권/";
console.log( dir );
console.log( flip );

if ( !dir || dir == undefined ) {
	console.log( "wrong dir format" );
	throw new Error( "wrong dir format" );
	return;
}

fs.readdir( dir, ( err, files ) => {
	var idx = 0;
	files.forEach( file_name => {
		if ( file_name.indexOf( "." ) > 0 && file_name.toLowerCase().indexOf( ".zip" ) == -1 && file_name != "Thumbs.db" ) {
			crop( dir, file_name, idx );
			idx++;
		}
	});
});



var crop = function( dir, file_name, idx ) {

	console.log( dir + file_name );

	sizeOf( dir + file_name ).
	then( dimensions => {

		const width = dimensions.width;
		const height = dimensions.height;
		const width_2 = parseInt( width / 2 );
		// console.log( width, height );

		const file_name_result = idx.toString();
		// const file_name_result = file_name.split( "." )[ 0 ];

		if ( width < 900 ) {
			jimp.
			read( dir + file_name ).
			then( img => {
				img.
				// flip( true, false ).
				write( dir + "results/" + file_name_result + "__1.jpg" );
			});
		} else {

			jimp.
			read( dir + file_name ).
			then( img => {

				img.
				// flip( true, false ).
				crop( 0, 0, width_2, height ).
				write( dir + "results/" + file_name_result + ( flip == "true" ? "__2.jpg" : "__1.jpg" ) );

			});

			jimp.
			read( dir + file_name ).
			then( img => {

				img.
				// flip( true, false ).
				crop( width_2, 0, width_2, height ).
				write( dir + "results/" + file_name_result + ( flip == "true" ? "__1.jpg" : "__2.jpg" ) );

			});
		}

		return 1;
	}).
	catch( err => console.error(err));
}

