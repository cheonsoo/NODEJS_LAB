var request = require( "request" );

var url = "https://www.xiaohongshu.com/goods/5ad842dfc9d7597198a9a1d3";
	url = encodeURI( url );

global._$TATIC_CONST_PROXY = {};
global._$TATIC_CONST_PROXY.LUMINATI = {
    "USERNAME" : "lum-customer-hl_b5a0c817-zone-static",
    "PASSWORD" : "4mhwzosv4bq3",
    // "ENDPOINT": 'zproxy.luminati-china.io', // 비공식 중국용 endpoint. 작동은 가능하나 공식도메인도 작동가능해서 일단은 놔둠.
    "ENDPOINT" : "zproxy.lum-superproxy.io",
    "PORT" : "22225"
};
var luminati = function() {
    let luminati = {
        getProxy : function() {
            let _ = global._$TATIC_CONST_PROXY.LUMINATI;
            let session_id = (1000000 * Math.random()) | 0;
            let url = `http://${_.USERNAME}-session-${session_id}:${_.PASSWORD}@${_.ENDPOINT}:${_.PORT}`;
            return url;
        }
    };

    return luminati;
};

var options = {
	url : url,
	proxy : luminati().getProxy()
}

function run() {
	console.log( "running ... " );
	request( url, function( err, response, data ) {
		if ( err ) {
			console.log( err );
		}
		
		console.log( "success" );

		setTimeout( run, 1000 );

	});
}

run();