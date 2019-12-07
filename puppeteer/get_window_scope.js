const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://google.co.kr');
    await page.goto('https://goods.kaola.com/product/2002162.html?isMarketPriceShow=true&hcAntiCheatSwitch=0&anstipamActiCheatSwitch=1&anstipamActiCheatToken=de3223456456fa2e3324354u4567lt&anstipamActiCheatValidate=anstipam_acti_default_validate');
    // await page.goto('http://onsight.b2link.co.kr/');

    const performance = await page.evaluate(
		() => window.dataLayer[4].com_data.goods
		// () => window.SYS0030_UI_API
    );

    console.log(performance);

    await browser.close();
})();