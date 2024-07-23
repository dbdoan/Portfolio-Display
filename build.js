const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const strapiUrl = process.env.STRAPI_URL;
const htmlFilePath = 'index.html';

fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }

    const result = data.replace('{{ STRAPI_URL }}', strapiUrl);

    fs.writeFile(htmlFilePath, result, 'utf8', (err) => {
        if (err) return console.error(err);
        console.log('Environment variable injected into HTML');
    });
});
