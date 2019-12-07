var phantom = require('phantom');
var _ph, _page, _outObj;

var url_list_vip = [
	"https://detail.vip.com/detail-3332878-606499157.html",
	"https://detail.vip.com/detail-3332878-606499191.html",
	"https://detail.vip.com/detail-3332878-606499154.html",
	"https://detail.vip.com/detail-3332878-606499144.html",
	"https://detail.vip.com/detail-3332878-606499127.html"
];

var url_list = url_list_vip;

var idx = 0;

let delay = ( d ) => {
	console.log( `waiting ${d} ...` );
	let promise = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			console.log( `waited ${d} ...` );
			resolve( d );
		}, d );
	});
	return promise;
};

var scrap = async () => {

	const instance = await phantom.create();
	const page = await instance.createPage();

	await delay( 3000 );

	await page.on( "onResourceRequested", requestData => {
		// console.log( `Requesting : ${requestData.url}` );
	});

	let url = url_list[ idx ];
		url = encodeURI( url );
	console.log( `### url : ${url}` );

	let status = await page.open( url );

	let content = await page.property( "content" );

	// console.log( content );

	await instance.exit();

	if ( url_list.length === ( idx + 1 ) ) {
		process.exit( 0 );
	}

	idx++;

	setTimeout( scrap, 2000 );
}

scrap();