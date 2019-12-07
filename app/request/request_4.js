var request = require( "request" );

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

var luminati = function() {
    let _luminati = {
        getProxy : function() {
            let _ = config.luminati;
            let session_id = (1000000 * Math.random()) | 0;
            let url = `http://${_.USERNAME}-session-${session_id}:${_.PASSWORD}@${_.ENDPOINT}:${_.PORT}`;
            return url;
        }
    };

    return _luminati;
};

var urls = [
    "https://m.xiaohongshu.com/web_api/sns/v1/search/note?keyword=Guerisson&page=1&page_size=20",
    "https://www.xiaohongshu.com/web_api/sns/v1/page/5a4384a08000862471d16763/notes?page=2&page_size=500&sort=time",
    "https://m.xiaohongshu.com/web_api/sns/v2/search/note?keyword=3ce&page=1&page_size=10",
    "https://m.xiaohongshu.com/web_api/sns/v3/search/note?keyword=inisfree&page=1"
];

var options = {
	url : encodeURI( urls[ 3 ] ),
	proxy : luminati().getProxy(),
	headers : {
		"User-Agent": "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 CUSTOM"
	}
}

request( options, function( err, response, data ) {
    if ( err ) {
        console.log( err );
    }

	var _data = JSON.parse( data );

    // console.log( _data );
   console.log( _data.data.notes[ 0 ] );
    // console.log( _data.data[ 0 ] );
 //    console.log( _data.data.notes[ 0 ].time );
	// console.log( _data.data.notes[ 0 ].desc );
});