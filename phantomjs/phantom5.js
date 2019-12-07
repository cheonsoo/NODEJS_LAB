var phantom = require('phantom');
var _ph, _page, _outObj;

var url_list_kaola = [
	"https://goods.kaola.com/product/1561509.html?referPage=searchPage&referId=amos&from=page1&position=1&istext=0&srId=3565ee431119633f8a0456a3fc6b27f0&zn=result&zp=page1-1&ri=amos&rp=search&isMarketPriceShow=true&hcAntiCheatSwitch=0&anstipamActiCheatSwitch=1&anstipamActiCheatToken=de3223456456fa2e3324354u4567lt&anstipamActiCheatValidate=anstipam_acti_default_validate",
	"https://goods.kaola.com/product/1561528.html?referPage=searchPage&referId=amos&from=page1&position=22&istext=0&srId=3565ee431119633f8a0456a3fc6b27f0&zn=result&zp=page1-22&ri=amos&rp=search&isMarketPriceShow=true&hcAntiCheatSwitch=0&anstipamActiCheatSwitch=1&anstipamActiCheatToken=de3223456456fa2e3324354u4567lt&anstipamActiCheatValidate=anstipam_acti_default_validate"
];

var url_list_vip = [
	// "https://detail.vip.com/detail-3332878-606499157.html",
	// "https://detail.vip.com/detail-3332878-606499191.html",
	// "https://detail.vip.com/detail-3332878-606499154.html",
	// "https://detail.vip.com/detail-3332878-606499144.html",
	"https://detail.vip.com/detail-3332878-606499127.html"
];

var url_list_red = [
	"https://www.xiaohongshu.com/goods/58c1f955c9d7590e073b621d",
	"https://www.xiaohongshu.com/goods/57d7be0d3283523991046dee"
];

var url_list = url_list_red;

var idx = 0;
var scrap = async () => {

	const instance = await phantom.create();
	const page = await instance.createPage();

	await page.on( "onResourceRequested", requestData => {
		// console.log( `Requesting : ${requestData.url}` );
	});

	let url = url_list[ idx ];
		url = encodeURI( url );
	console.log( `### url : ${url}` );

	let status = await page.open( url );

	let content = await page.property( "content" );

	console.log( content );

	await instance.exit();

	if ( url_list.length === ( idx + 1 ) ) {
		process.exit( 0 );
	}

	idx++;

	setTimeout( scrap, 2000 );
}

scrap();