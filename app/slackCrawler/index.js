const puppeteer = require('puppeteer');
const fs = require('fs');
const cheerio = require('cheerio');

const id = '23358';
const pw = '23358';

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://jira.gsenext.com';

  await page.goto(url, { waitUntil: 'networkidle2' });

  await page.evaluate((id, pw) => {
    document.querySelector('#login-form-username').value = id;
    document.querySelector('#login-form-password').value = pw;
    document.querySelector('.aui-button.aui-button-primary').click();
  }, id, pw);

  await page.waitForNavigation();

  const page2 = await browser.newPage();
  const filterUrl = 'https://jira.gsenext.com/issues/?filter=11249';
  await page2.goto(filterUrl);
  const ticketList = await page2.evaluate(() => Array.from(document.querySelector('#issuetable').querySelector('.ui-sortable').querySelectorAll('tr')).map(item => item.getAttribute('data-issuekey')));
  console.log(ticketList);

  browser.close();
}

run();
