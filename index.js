const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    console.log("pasa 1")
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 720 });
    await page.goto('https://www.badoo.com/signin', { waitUntil: 'networkidle0' }); // wait until page load

    await page.type('[type="text"]', process.env.user);
    await page.type('[type="password"]', process.env.password);

    // click para acceder mediante el login
    // await Promise.all([
    await page.click('[type="submit"]')
        // await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await page.setDefaultNavigationTimeout(0);
    // ]);

    // click en boton de corazones
    // await Promise.all([
    console.log("pasa")
    await page.click('button.prod-ProductCTA--primary')
        // esperar
    console.log("pasa 2")
        // page.click('button.prod-ProductCTA--primary')
        //     // esperar
        // console.log("pasa 3")
        // page.click('button.prod-ProductCTA--primary')
        //     // esperar
        // console.log("pasa 4")
        // page.waitForNavigation({ waitUntil: 'networkidle0' })
        // ]);
}

main();