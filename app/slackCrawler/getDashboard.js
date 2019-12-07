const puppeteer = require('puppeteer');
const fs = require('fs');
const request = require('request');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://jira.gsenext.com';

  await page.goto(url, {waitUntil: 'networkidle2'});

  const id = '23358';
  const pw = '23358';

  await page.evaluate((id, pw) => {
    document.querySelector('#login-form-username').value = id;
    document.querySelector('#login-form-password').value = pw;
    document.querySelector('.aui-button.aui-button-primary').click();
  }, id, pw);

  // await page.click('#login-form-submit');

  await page.waitForNavigation();

  const page2 = await browser.newPage();
  // const dashboardApiUrl = 'https://jira.gsenext.com/rest/gadget/1.0/statistics?filterId=10635&statType=components&_=1574066245214';
  const dashboardApiUrl = 'https://jira.gsenext.com/rest/gadget/1.0/statistics?filterId=10442&statType=statuses&_=1574236295006';

  await page2.goto(dashboardApiUrl);
  let status = await page2.evaluate(() => document.body.innerText);
  console.log(JSON.parse(status));

  fs.writeFileSync(`./result/data/dashboard_status__${new Date().getTime()}`, status);

  await page.screenshot({path: `./result/screenshots/JIRA_DASHBOARD__${new Date().getTime()}.png`});

  browser.close();
})();
