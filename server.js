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
const multer = require('multer'); // Пакет работы с файлами
const app = express();

const port = process.env.PORT || 5000;

// Настройка storage метода multer
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./public/img"); // Место хранения файла
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname); // Имя файла в хранилище
    }
});

app.use(express.static(__dirname + '/public'));
app.use(multer({storage:storageConfig}).single('filedata'));
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

app.post('/imgUpload', (req, res) => {

    const filePath = './public/database/data3.json';
    const filedata = req.file;
    const {name, price} = req.body

    let newItem = {
        19: {
            id: 19,
            img: `./img/${filedata.originalname}`,
            name,
            price
        }
    }

    if(!filedata) {
        res.send("Ошибка при загрузке файла")
        return
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(`Oops: ${err}`);
        }

        data = JSON.parse(data)
        newItem = {...data, ...newItem}

        fs.writeFile(filePath, JSON.stringify(newItem), (err) => {
            if (err) {
                console.log(`Oops: ${err}`);
            }
    
            res.send(newItem);
        });
    
    });

});

app.listen(port, (err) => { 
    if (err) {
        console.log(`Oops: ${err}`);
    }
    console.log(`Server started at ${port} port`);
});