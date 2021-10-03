const puppeteer = require('puppeteer');
const expect = require('chai').expect;
describe('Login.js', () => {
    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({ headless: true, slowMo: 200 });
        page = await browser.newPage();
    });

    it('save the login page screenshot', async () => {
        await page.goto('http://localhost:3000');
        await page.screenshot({ path: 'login.png' });
    });

    it('contains the welcome text', async () => {
        await page.goto('http://localhost:3000');
        await page.waitForSelector('#heading');
        const text = await page.$eval('#heading', (e) => e.textContent);
        expect(text).contain('Quizzone');
    });

    after(() => browser.close());
});
