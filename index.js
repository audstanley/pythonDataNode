var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs');

const app = express();

//middleware
app.use('/', require(__dirname, 'routes/index.js'));
app.use('/uploads/', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/uploads', function (req, res) {
let uploadsPath = __dirname + '/uploads/'
let files = fs.readdirSync(uploadsPath)
files.sort(function(a, b) {
               return fs.statSync(uploadsPath + a).mtime.getTime() -
                      fs.statSync(uploadsPath + b).mtime.getTime();
});
    res.render('uploads', {fileList: files.reverse()});
    //console.log(files)
    console.log("Uploads Viewed.")
});

app.get('/users/:id', function (req, res) {
  res.render('users', { title: "Hey ", message: "Hello there!", uid: req.params.id });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('pid is ' + process.pid);
});

process.on('SIGTERM', function () {
  server.close(function () {
    process.exit(0);
  });
});
