const puppeteer = require( "puppeteer" );

var scrap = async () => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	let url = "https://goods.kaola.com/product/2002162.html?isMarketPriceShow=true&hcAntiCheatSwitch=0&anstipamActiCheatSwitch=1&anstipamActiCheatToken=de3223456456fa2e3324354u4567lt&anstipamActiCheatValidate=anstipam_acti_default_validate";

	await page.goto( url );

	const html = await page.evaluate( () => { return document.documentElement.outerHTML; } );
	// const html = await page.evaluate( () => { return document.body.innerHTML } );

	// const result = await page.evaluate(() => { return document.getElementsByClassName("PInfo_r currentPrice")[ 0 ].innerHTML; });

	console.log( `html: ${html}` );
	// console.log( `result: ${result}` );

	await browser.close();
};

scrap();