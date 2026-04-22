import https from 'https';

function fetchMeta(urlStr: string) {
    return new Promise((resolve, reject) => {
        https.get(urlStr, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // follow redirect
                fetchMeta(res.headers.location).then(resolve).catch(reject);
                return;
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const ogImage = data.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
                resolve({ url: urlStr, ogImage });
            });
        }).on('error', reject);
    });
}

fetchMeta("https://maps.app.goo.gl/rhTXqSypppmfK4Md9").then(console.log).catch(console.error);
