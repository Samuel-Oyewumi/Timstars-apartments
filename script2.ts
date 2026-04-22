import https from 'https';
import http from 'http';

const url = "https://www.google.com/maps/place/Timstars+Service+Apartments/@5.5003361,7.513266,17z/data=!4m7!3m6!1s0x1042c300726c4481:0x51ee046d8d85dfbc!8m2!3d5.5003361!4d7.5158408!15sChJ0aW1zdGFycyBhcGFydG1lbnSSARhob2xpZGF5X2FwYXJ0bWVudF9yZW50YWzgAQA!16s%2Fg%2F11ymfh2xgk?entry=tts";

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Look for phone numbers +234
        const phoneRegex = /\+234\s?\d{2,3}\s?\d{3}\s?\d{4}|\+234\d{10}/g;
        const phones = [...new Set(data.match(phoneRegex))];
        console.log("Found phones:", phones);

        // Try to get some reviews (Snippet looking for 5 stars, etc)
        const reviews = data.match(/".{10,200}?"/g)?.filter(x => x.toLowerCase().includes('clean') || x.toLowerCase().includes('safe') || x.toLowerCase().includes('apartment') || x.toLowerCase().includes('good'));
        console.log("Potential snippets:", reviews?.slice(0, 5));
    });
});
