const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const filePath = './public/' + req.url.substr(1);
    console.log(`Запрошенный адрес: ${filePath}`);
    if (filePath === './public/') {
        res.end(fs.readFileSync('./public/index.html', 'utf8'));
    } else {
        fs.readFile(filePath, (error, data) => {
            if (error) {
                res.statusCode = 404;
                res.end("Reosourse not found!");
            } else {
                res.end(data);
            }
        });
    }
}).listen(3000, () => {
    console.log("Server started at 3000");
});