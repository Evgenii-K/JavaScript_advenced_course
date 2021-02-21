const http = require('http'),
      fs = require('fs'),
      mime = require('mime'),
      port = process.env.PORT || 3000,
      dirWay = './public/';

http.createServer((req, res) => {
    // добавляем к запросу путь к папке
    const filePath = dirWay + req.url.substr(1);
    console.log(`Запрошенный url: ${filePath}`);
    console.log(`Тип файла: ${mime.getType(filePath)}`);

    if (filePath === dirWay) {
        res.end(fs.readFileSync('./public/index.html', 'utf8'));
    } else {
        fs.access(filePath, fs.constants.R_OK, err => {
            // если произошла ошибка - отправляем статусный код 404
            if(err){
                res.statusCode = 404;
                res.end("Resourse not found!");
            }
            else{
                res.setHeader('Content-Type', mime.getType(filePath));
                fs.createReadStream(filePath).pipe(res);
            }
        });
    }
}).listen((port), () => {
    console.log(`Server started at ${port}`);
});