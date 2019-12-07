const puppeteer = require('puppeteer');

const url = 'http://portal.gshs.co.kr/loginForm.do';
const id = '23358';
const password = 'wkdal**201901';

const numToRun = 3;
const numToRunAtOnce = 5;
let cnt = 0;

async function signin() {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto(url);
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
  if (cnt > numToRun) {
    console.log('DONE');
    process.exit(0);
    return;
  }

  console.log('running ...');
  const fnArr = [];
  for (let i=0; i<numToRunAtOnce; i++) {
    fnArr.push(signin());
  }

  await Promise.all(fnArr);

  console.log('restarting ...');
  cnt++;
  run();
}

run();