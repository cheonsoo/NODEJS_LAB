var request = require( "request" );
var phantom = require( "phantom" );

var config = {
    luminati : {
        "USERNAME" : "lum-customer-hl_b5a0c817-zone-static",
        "PASSWORD" : "4mhwzosv4bq3",
        // 비공식 중국용 endpoint. 작동은 가능하나 공식도메인도 작동가능해서 일단은 놔둠.
        // "ENDPOINT": 'zproxy.luminati-china.io',
        "ENDPOINT" : "zproxy.lum-superproxy.io",
        "PORT" : "22225"
    }
};

var getProxy = function() {
    let _ = config.luminati;
    let session_id = (1000000 * Math.random()) | 0;
    let url = `http://${_.USERNAME}-session-${session_id}:${_.PASSWORD}@${_.ENDPOINT}:${_.PORT}`;
    return url;
};

console.log( getProxy() );
return;

var urls = [
    "https://www.xiaohongshu.com/goods/58c1f955c9d7590e073b621d"
];

var options = {
	url : encodeURI( urls[ 0 ] ),
	proxy : getProxy(),
	headers : {
		"User-Agent": "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 CUSTOM"
	}
}

request( options, function( err, response, data ) {
    if ( err ) {
        console.log( err );
    }

	// var _data = JSON.parse( data );

    console.log( data );
   // console.log( _data.data.notes[ 0 ] );
    // console.log( _data.data[ 0 ] );
 //    console.log( _data.data.notes[ 0 ].time );
	// console.log( _data.data.notes[ 0 ].desc );
});