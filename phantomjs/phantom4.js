var phantom = require('phantom');
var _ph, _page, _outObj;

// var queryList = {
// 	"seller" :  {
// 		"nm" : "seller",
// 		"query" : ".PTags.f-hkdn",
// 		"val" : ""
// 	}, 
// 	"member_price" : {
// 		"nm" : "member_price",
// 		"query" : ".m-price-wrap .m-vipmember .msg",
// 		"val" : ""
// 	}
// };

var url = "https://goods.kaola.com/product/1571992.html";

phantom.
create().
then(ph => {
    _ph = ph;
    return _ph.createPage();
}).
then(page => {
    _page = page;
    return _page.open( url );
}).
then(status => {
    console.log(status);
    return _page.evaluate(function() {

    	var queryList = {
			"seller" :  {
				"nm" : "seller",
				"query" : ".PTags.f-hkdn",
			}, 
			"member_price" : {
				"nm" : "member_price",
				"query" : ".m-price-wrap .m-vipmember .msg",
			},
			"sell_price" : {
				"nm" : "sell_price",
				"query" : ".m-price-wrap .m-price .m-price-cnt .PInfo_r.currentPrice span"
			},
			"original_price" : {
				"query" : ".m-price-wrap .m-price .m-price-cnt .PInfo_r.marketPrice.addprice.j-marketprice span"
			},
			"out_of_stock" : {
				"query" : ".buyBtns #buyBtn" // 판매중
				// "query" : "buyBtns .btn-nogoods" // 품절

			}
		};

    	var doc;
    	for ( var key in queryList ) {
    		doc = queryList[ key ];
    		var txt = document.querySelector( doc.query ).innerText;
    		doc.val = txt;
    	}

    	return queryList;
    });
}).
then(content => {
    console.log( JSON.stringify( content ) );
    _page.close();
    _ph.exit();
}).
catch(e => console.log(e));