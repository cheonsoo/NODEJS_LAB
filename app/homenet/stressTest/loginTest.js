const approot = require('app-root-path');
const puppeteer = require('puppeteer');

const url = 'http://portal.gshs.co.kr';
const id = '23358';
const password = 'wkdal**201901';

const getDateString = () => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
      day = day < 10 ? `0${day}` : day;
  let hours = date.getHours();
      hours = hours < 10 ? `0${hours}` : hours;
  let minutes = date.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
      seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
};

async function signin() {
  console.log('signing in ...');
  const browser = await puppeteer.launch({
    headless: false,
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
      console.log('login button is loaded...');
    }

    await page.click('#btnSubmit');

    const cookies = await page.cookies();
    if (!cookies && cookies.length === 0) {
      console.log(`### cookies not loaded`);
      return;
    }
    console.log(`### cookies loaded: ${cookies[0].name}`);

    const checkLogoImg = await page.waitForSelector('.logo_bg_jp');

    if (!checkLogoImg) {
      console.log('logo img is not loaded');
      await page.close();
      await browser.close();
      return;
    }

    console.log('logo img is loaded');
    console.log(approot);
    await page.screenshot({ path: `${approot}/app/homenet/result/stressTest/HOMENET__${getDateString()}.png` });
  } catch (err) {
    console.log(err.message);
  }

  await page.close();
  await browser.close();
}

signin();