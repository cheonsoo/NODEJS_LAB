var request = require( "request" );




// local
// var host = "localhost:45320";
// var sid = "6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526d4e54597a4f4463344e546733595451314d7a4d314f4464684e44557a4d5455344e324532597a59324e4751314e4459334d7a59305a6a5a684e47517a4d7a526c4e5451314d544e6b";



// 123
var host = "222.239.10.123:45320";
var sid = "6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526d4e54597a4f4463344e546733595451314d7a4d314f4464684e44557a4d7a55344e3245314d544d7a4e546733595451354e7a63305a6a5a684e6d59334e7a526b4e5451304d544d77";


var date_start = "2018-10-01";
var date_end = "2018-12-01";

var url1 = 'http://{{host}}/board_data/product_distribution/productDistributionStatusByProduct?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22PM152%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981465';

var urls = [
'http://{{host}}/board_data/brand_distribution/brandDistributionStatus?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981459',
'http://{{host}}/board_data/shop_distribution/shopDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981460',
'http://{{host}}/board_data/product_distribution/productDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981461',
'http://{{host}}/board_data/sales_rank/brandSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981462',
'http://{{host}}/board_data/sales_rank/productSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981463',
'http://{{host}}/board_data/sales_rank/brandSalesRank_brandList?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981464',
'http://{{host}}/board_data/product_distribution/productDistributionStatusByProduct?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22PM152%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981465',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981466',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:72,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981467',



'http://{{host}}/board_data/brand_distribution/brandDistributionStatus?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981459',
'http://{{host}}/board_data/shop_distribution/shopDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981460',
'http://{{host}}/board_data/product_distribution/productDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981461',
'http://{{host}}/board_data/sales_rank/brandSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981462',
'http://{{host}}/board_data/sales_rank/productSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981463',
'http://{{host}}/board_data/sales_rank/brandSalesRank_brandList?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981464',
'http://{{host}}/board_data/product_distribution/productDistributionStatusByProduct?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22PM152%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981465',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981466',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:72,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981467',



'http://{{host}}/board_data/brand_distribution/brandDistributionStatus?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981459',
'http://{{host}}/board_data/shop_distribution/shopDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981460',
'http://{{host}}/board_data/product_distribution/productDistributionStatus?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981461',
'http://{{host}}/board_data/sales_rank/brandSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981462',
'http://{{host}}/board_data/sales_rank/productSalesRank?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981463',
'http://{{host}}/board_data/sales_rank/brandSalesRank_brandList?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981464',
'http://{{host}}/board_data/product_distribution/productDistributionStatusByProduct?data={%22_id$brand_basic%22:204,%22nm$brand_basic%22:%22%22,%22cd$product_master%22:%22PM152%22,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:null,%22date_end_comare%22:null,%22date_option%22:%22day%22,%22limit%22:10}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981465',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:204,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981466',
'http://{{host}}/board_data/brand_distribution/productSalesRank?data={%22_id$brand_basic%22:72,%22date_start%22:%22{{date_start}}%22,%22date_end%22:%22{{date_end}}%22,%22date_start_comare%22:%22%22,%22date_end_comare%22:%22%22,%22date_option%22:%22day%22,%22limit%22:5,%22nm$brand_basic%22:%22My%20Brand%22}&sid={{sid}}&mid=ahc@gmail.com&d_ex=Thu,%2017%20Jan%202019%2010:46:25%20GMT&SCODE=SYS0030&nCached=1547711981467'


];



for ( var i=0; i<urls.length; i++ ) {
	let url = urls[ i ];
	url = url.replace( "{{host}}", host ).replace( "{{sid}}", sid ).replace( "{{date_start}}", date_start ).replace( "{{date_end}}", date_end );

	request( url, function( err, response, data ) {
		if ( err ) {
			console.log( err );
		}
		console.log( JSON.parse( data ).executionTime );
		console.log( data );
	});
}



/*
url1 = url1.replace( "{{sid}}", sid ).replace( "{{date_start}}", date_start ).replace( "{{date_end}}", date_end );
for ( var i=0; i<500; i++ ) {

	request( url1, function( err, response, data ) {
		if ( err ) {
			console.log( err );
		}
		console.log( JSON.parse( data ).executionTime );
		console.log( data );
	});

}
*/


