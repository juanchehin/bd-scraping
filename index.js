const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

async function main() {
    const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 720 });
    await page.goto(process.env.site, { waitUntil: 'networkidle0' }); // wait until page load

    await page.type('[type="text"]', process.env.user);
    await page.type('[type="password"]', process.env.password);

    // click para acceder mediante el login
    await page.click('[type="submit"]')
        // espera a cargar sitio
    await page.waitForTimeout(11000);

    let button = await page.$(".encounters-actions__item.encounters-actions__item--yes");
    page.waitForTimeout(25000)

    var i
    for (i = 0; i <= 20; i++) {
        console.log("pasa ", i)

        await page.waitForTimeout(10000)

        console.log("pasa 1", i)

        await button.click() // Clicking the link will indirectly cause a navigation

        console.log("pasa 2", i)
    }
}

main();