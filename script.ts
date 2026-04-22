// fetch.ts
import https from 'https';

const url = "https://maps.app.goo.gl/vR1wevrdxXTVqs2C8";

https.get(url, (res) => {
    console.log("Status Code:", res.statusCode);
    if (res.statusCode >= 300 && res.statusCode < 400) {
        console.log("Redirect URL:", res.headers.location);
    }
});
