var cheerio = require('cheerio');
var request = require('request');

var url = "http://search.11st.co.kr/SearchPrdAction.tmall?method=getTotalSearchSeller&isGnb=Y&prdType=&category=&cmd=&pageSize=&lCtgrNo=&mCtgrNo=&sCtgrNo=&dCtgrNo=&fromACK=&semanticFromGNB=&gnbTag=TO&schFrom=&schFrom=&ID=&ctgrNo=&srCtgrNo=&keyword=&adUrl=&adKwdTrcNo=1201705094620692382&adPrdNo=1742502346&targetTab=T&kwd=%B8%B6%BD%BA%C5%A9";

request( url, function( error, response, html ) {

    if (error)
    	throw error;

    // console.log (html);

    var $ = cheerio.load(html);
    console.log( $.html() );

    // console.log( $(".hotClick_wrap") );

    // $('#side_today_count').each(function(){
    //     console.log("오늘의 방문자 수 : " + $(this).text());
    // })

});