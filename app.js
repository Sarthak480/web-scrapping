const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const WriteStream = fs.createWriteStream('post.csv');

WriteStream.write(`Title,Data \n`);
request('https://blog.hubspot.com/blog/tabid/6307/bid/34143/12-inspiring-examples-of-beautiful-blog-homepage-designs.aspx', (err, res, html)=>{
    if(!err && res.statusCode == 200){
        const $ = cheerio.load(html);
        $('.hsg-featured-snippet').each((i,el)=>{
            const title = $(el)
            .find('li')
            .text();
            const data = $(el)
            .find('h2')
            .text();
            WriteStream.write(`${title}, ${data}`);
        });
        console.log('Scrapping done!');
    }
});


