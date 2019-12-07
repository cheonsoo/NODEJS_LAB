const puppeteer = require('puppeteer');
const id = '23358';
const password = 'wkdal**201901';


for (let i = 0; i < 50; i++) {
  (async() => {
    const browser = await puppeteer.launch({
            headless: true,
            ignoreHTTPSErrors: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

    const page = await browser.newPage();

    await page.goto('http://portal.gshs.co.kr/loginForm.do');
    await page.type('#j_username', id);
    await page.type('#password', password);
    await page.waitForSelector('#btnSubmit > img')
                .then(() => console.log('main logo image loaded'));

    await page.click('#btnSubmit');

    const cookies = await page.cookies();
    console.log('cookie: ' + JSON.stringify(cookies));
    await page.close();
    await browser.close();
  })();
}