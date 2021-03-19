// const http = require('http'),
//       fs = require('fs'),
//       mime = require('mime'),
//       port = process.env.PORT || 3000,
//       dirWay = './public/';

// http.createServer((req, res) => {
//     // добавляем к запросу путь к папке
//     const filePath = dirWay + req.url.substr(1);
//     console.log(`Запрошенный url: ${filePath}`);
//     console.log(`Тип файла: ${mime.getType(filePath)}`);

//     if (filePath === dirWay) {
//         res.end(fs.readFileSync('./public/index.html', 'utf8'));
//     } else {
//         fs.access(filePath, fs.constants.R_OK, err => {
//             // если произошла ошибка - отправляем статусный код 404
//             if(err){
//                 res.statusCode = 404;
//                 res.end("Resourse not found!");
//             }
//             else{
//                 res.setHeader('Content-Type', mime.getType(filePath));
//                 fs.createReadStream(filePath).pipe(res);
//             }
//         });
//     }
// }).listen((port), () => {
//     console.log(`Server started at ${port}`);
// });

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/database/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`./public/database/data${page}.json`, 'utf8', (err, data) => {
        if (err) {
            console.log(`Oops: ${err}`);
        }
        res.send(data);
    });
});

app.get('/cartlist', (req, res) => {
    fs.readFile('./public/database/cartlist.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Oops: ${err}`);
        }
        res.send(data);
    });
});

app.post('/cartlist', (req, res) => {
    const filePath = './public/database/cartlist.json';
    const data = req.body;

    fs.writeFile(filePath, JSON.stringify(data), (err) => {
        if (err) {
            console.log(`Oops: ${err}`);
        }
        res.send(data);
    });
});

app.listen(port, (err) => { 
    if (err) {
        console.log(`Oops: ${err}`);
    }
    console.log(`Server started at ${port} port`);
});