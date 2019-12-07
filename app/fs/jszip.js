var fs = require( "fs" );
var archiver = require( "archiver" );


var date = "20180827";

// var path = `/Users/cpark/Workspace/B2LINK/B2LiNK-OnSight-Crawler-2/result/vip/product_detail`;

// let zipFiles = () => {
// 	let promise = new Promise(function( resolve, reject ) {
// 		var output = fs.createWriteStream( `/Users/cpark/Workspace/mansoo/MANSOO_LAB/nodejs/fs/${date}.zip` );
// 		var archive = archiver( "zip" );

// 		archive.pipe( output );

// 		var arr = [
// 		"vip_product_detail__79__222160386953863170__1601462__558766978__20180827_153324.html",
// 		"vip_product_detail__79__228634311418208261__1601462__558766976__20180827_153305.html",
// 		"vip_product_detail__79__234263810952421382__1601462__558766981__20180827_153327.html",
// 		"vip_product_detail__79__239048885556502528__1601462__558766977__20180827_153320.html",
// 		"vip_product_detail__79__248337559787954180__1601462__558766980__20180827_153332.html",
// 		"vip_product_detail__79__249463459694796801__1601462__558766982__20180827_153317.html",
// 		"vip_product_detail__79__2891170566217731__1601462__266861207__20180827_153356.html",
// 		"vip_product_detail__79__289151442360287233__1601462__579163263__20180827_153335.html",
// 		"vip_product_detail__79__289432917336997888__1601462__579163264__20180827_153301.html",
// 		"vip_product_detail__79__289995867290419205__1601462__579163267__20180827_153239.html",
// 		"vip_product_detail__79__29068343400308736__1601462__266861213__20180827_153210.html",
// 		"vip_product_detail__79__295625366824632326__1601462__579163265__20180827_153243.html"
// 		];

// 		var file = `/Users/cpark/Workspace/mansoo/MANSOO_LAB/nodejs/fs/${date}`;

// 		archive.directory( file, false );

// 		archive.finalize();

// 		resolve( "true" );
// 	});

// 	return promise;
// };

let zipFiles = async () => {
	var output = fs.createWriteStream( `/Users/cpark/Workspace/mansoo/MANSOO_LAB/nodejs/fs/${date}_${new Date().getTime()}.zip` );
	var archive = archiver( "zip" );

	output.on( "finish", () => {
		console.log( "COMPRESS DONE" );
		process.exit( 0 );
	});

	archive.pipe( output );

	var arr = [
		"vip_product_detail__79__222160386953863170__1601462__558766978__20180827_153324.html",
		"vip_product_detail__79__228634311418208261__1601462__558766976__20180827_153305.html",
		"vip_product_detail__79__234263810952421382__1601462__558766981__20180827_153327.html",
		"vip_product_detail__79__239048885556502528__1601462__558766977__20180827_153320.html",
		"vip_product_detail__79__248337559787954180__1601462__558766980__20180827_153332.html",
		"vip_product_detail__79__249463459694796801__1601462__558766982__20180827_153317.html",
		"vip_product_detail__79__2891170566217731__1601462__266861207__20180827_153356.html",
		"vip_product_detail__79__289151442360287233__1601462__579163263__20180827_153335.html",
		"vip_product_detail__79__289432917336997888__1601462__579163264__20180827_153301.html",
		"vip_product_detail__79__289995867290419205__1601462__579163267__20180827_153239.html",
		"vip_product_detail__79__29068343400308736__1601462__266861213__20180827_153210.html",
		"vip_product_detail__79__295625366824632326__1601462__579163265__20180827_153243.html"
	];

	var file = `/Users/cpark/Workspace/mansoo/MANSOO_LAB/nodejs/fs/${date}`;

	archive.directory( file, false );

	await archive.finalize();
};

let run = async () => {
	await zipFiles();

	// process.exit( 0 );

	console.log( "END" );
};

run();