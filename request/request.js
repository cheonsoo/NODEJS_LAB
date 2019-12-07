var request = require( "request" );

var url = "https://m.xiaohongshu.com/web_api/sns/v1/search/note?keyword=Guerisson&page=1&page_size=20";
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
    // 비공식 중국용 endpoint. 작동은 가능하나 공식도메인도 작동가능해서 일단은 놔둠.
    // "ENDPOINT": 'zproxy.luminati-china.io',
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


// var options = {
// 	url : url,
// 	proxy : luminati().getProxy(),
// 	headers : {
// 		"Host": "m.xiaohongshu.com",
// 		"Connection": "keep-alive",
// 		"Cache-Control": "max-age=0",
// 		"Upgrade-Insecure-Requests": "1",
// 		"User-Agent": "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 CUSTOM",
// 		// "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Mobile Safari/537.36",
// 		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
// 		"Accept-Encoding": "gzip, deflate, br",
// 		"Accept-Language": "ko,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6,zh-TW;q=0.5",
// 		"Cookie": "xhsTrackerId=b95b8003-81ef-46fa-c689-5e00e136c380; Hm_lvt_d0ae755ac51e3c5ff9b1596b0c09c826=1531819331; Hm_lvt_9df7d19786b04345ae62033bd17f6278=1531819331; Hm_lpvt_9df7d19786b04345ae62033bd17f6278=1531821619; Hm_lpvt_d0ae755ac51e3c5ff9b1596b0c09c826=1531821619; xhs_spid.1e22=79d2100d01f01afa.1531819331.1.1531821622.1531819331.ee5c5bba-116d-4702-84ad-80b87c9449e2",
// 	}
// }

var options = {
	url : url,
	proxy : luminati().getProxy(),
	headers : {
		"User-Agent": "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 CUSTOM"
	}
}

request( url, function( err, response, data ) {
	var _data = JSON.parse( data );
	console.log( _data );
});