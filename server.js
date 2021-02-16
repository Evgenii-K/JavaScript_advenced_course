const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const dirWay = './public/';

http.createServer((req, res) => {
    // добавляем к запросу путь к папке
    const filePath = dirWay + req.url.substr(1);
    console.log(`Запрошенный url: ${filePath}`);
    fs.createReadStream(filePath).pipe(res); 
}).listen((port), () => {
    console.log(`Server started at ${port}`);
});