const puppeteer = require('puppeteer');

const id = '23358';
const password = 'wkdal**201901';
const numToRun = 3;

async function signin() {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto('http://portal.gshs.co.kr/loginForm.do');
  try {
    await page.type('#j_username', id);
    await page.type('#password', password);
    const checkImg = await page.waitForSelector('#btnSubmit > img');
    if (checkImg) {
      console.log('img loaded...');
    }

    await page.click('#btnSubmit');

    const cookies = await page.cookies();
    // console.log(cookies);
    if (cookies && cookies.length > 0) {
      console.log(`### cookies loaded: ${cookies[0].name}`);
    }
  } catch (err) {
    console.log('no node found');
  }

  await page.close();
    await browser.close();
}

async function run() {
  const fnArr = [signin(), signin(), signin()];

  for (let k=0; k<3; k++) {
    Promise.all(fnArr);
  }
}

run();