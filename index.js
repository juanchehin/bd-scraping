const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    console.log("pasa")
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 720 });
    await page.goto('https://www.badoo.com/signin', { waitUntil: 'networkidle0' }); // wait until page load

    await page.type('[type="text"]', process.env.user);
    await page.type('[type="password"]', process.env.password);

    // click para acceder mediante el login
    await page.click('[type="submit"]')
        // espera a cargar sitio
    await page.waitForTimeout(11000);

    let f = await page.$(".encounters-actions__item.encounters-actions__item--yes");
    await f.click();

}

main();