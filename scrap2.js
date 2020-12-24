const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('Xpath');
    const src= await el.getProperty('src');
    const srcText = await src.jsonValue();

    console.log(srcText);
}

scrapeProduct('');

