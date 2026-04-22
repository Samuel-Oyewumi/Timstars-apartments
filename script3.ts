import https from 'https';

const testUrls = [
  "https://www.instagram.com/timstars_apartments",
  "https://www.instagram.com/timstarsapartments",
  "https://www.instagram.com/timstars.apartments"
];

testUrls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
});
