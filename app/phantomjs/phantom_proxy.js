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
	"https://www.xiaohongshu.com/goods/58c1f955c9d7590e073b621d"
];

var url_list = url_list_red;

var idx = 0;

var config = {};
config.luminati = {
    "USERNAME" : "lum-customer-hl_b5a0c817-zone-static",
    "PASSWORD" : "4mhwzosv4bq3",
    // 비공식 중국용 endpoint. 작동은 가능하나 공식도메인도 작동가능해서 일단은 놔둠.
    // "ENDPOINT": 'zproxy.luminati-china.io',
    "ENDPOINT" : "zproxy.lum-superproxy.io",
    "PORT" : "22225"
};

let getProxy = () => {
	let _ = config.luminati;
    let session_id = ( 1000000 * Math.random() ) | 0;
    let url = `http://${_.USERNAME}-session-${session_id}:${_.PASSWORD}@${_.ENDPOINT}:${_.PORT}`;
    return url;
};

var scrap = function() {

	console.log( `idx : ${idx}` );

	phantom.
	// create().
	create( [ `--web-security=no`, `--proxy=${getProxy()}` ] ).
	then(ph => {
	    _ph = ph;
	    return _ph.createPage();
	}).
	then(page => {
	    _page = page;
	    let url = url_list[ idx ];
	    return _page.open( url );
	}).
	then(status => {
	    return _page.property( "content" );
	}).
	then(content => {
	    console.log(content);
	    _page.close();
	    _ph.exit();
	    idx++;
	    if ( url_list[ idx ] ) {
	    	var _default = 2000;
	    	var delay = _default + parseInt( Math.random() * 1000 );
	    	setTimeout( scrap, delay );
	    }
	}).
	catch(e => console.log(e));	
}

scrap();