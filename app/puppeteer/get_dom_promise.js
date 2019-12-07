const puppeteer = require('puppeteer');

let url = 'https://goods.kaola.com/product/2002162.html?isMarketPriceShow=true&hcAntiCheatSwitch=0&anstipamActiCheatSwitch=1&anstipamActiCheatToken=de3223456456fa2e3324354u4567lt&anstipamActiCheatValidate=anstipam_acti_default_validate';

puppeteer.launch()
.then(function( browser) {
	return browser.newPage();
})
.then(function( page ) {
	return page.goto( url );
})
.then(function( result ) {
	
});

(async () => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto( url );

	// Get the "viewport" of the page, as reported by the page.
	const result = await page.evaluate(() => {

		let o = document.getElementsByClassName("PInfo_r currentPrice")[ 0 ].innerHTML;
		// let o = window.document.body.innerHTML;

		return o;
	});

	console.log('result: ', result );

	await browser.close();
})();