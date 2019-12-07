var request = require( "request" );

var url = "https://www.xiaohongshu.com/goods/5ad842dfc9d7597198a9a1d3";
	url = encodeURI( url );

// var request_get = function() {
// 	var promise = new Promise(function( resolve, reject ) {
// 		request.get( url );
// 	});
// }

// var options = {
// 	url : url,
// 	headers: {
// 		"User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Mobile Safari/537.36",
// 		"Host" : "m.xiaohongshu.com",
// 		// "User-Agent" : "request",
// 		"Content-Type" : "application/json",
// 		"Access-Control-Allow-Methods" : "GET,OPTIONS",
// 		"Access-Control-Allow-Credentials" : "true",
// 		"Access-Control-Allow-Origin" : "0",
// 		"Access-Control-Max-Age" : "86400",
// 		"Connection" : "keep-alive",
// 		"Content-Encoding" : "gzip",
// 		"Date" : "Tue, 17 Jul 2018 10:44:17 GMT",
// 		"Server" : "openresty",
// 		"Transfer-Encoding" : "chunked",
// 		"X-Dscp-Value" : "0",
// 		"X-Via" : "1.1 shuangxian97:4 (Cdn Cache Server V2.0), 1.1 jn17:1 (Cdn Cache Server V2.0)"
// 	}
// };

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
	var promise = new Promise(function(resolve, reject) {
		request( url, function( err, response, data ) {
			if ( err ) {
				console.log( err );
				reject( err.message );
			}
			resolve( data );
		});
	});

	return promise;
}

run().
then(function() {


	setTimeout(run, 1000);
});