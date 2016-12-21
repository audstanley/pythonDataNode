var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();

//middleware
app.use('/ftp', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use('/public/stylesheet', express.static(path.join(__dirname, 'public/stylesheet')));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/ftp', function (req, res) {
  res.render('ftp');
});

app.get('/users/:id', function (req, res) {
  res.render('users', { title: "Hey ", message: "Hello there!", uid: req.params.id });
});


app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req, res) {
    console.log(req.body); //form fields
    console.log(req.file); //form files
    res.status(204).end();
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('pid is ' + process.pid);
});

process.on('SIGTERM', function () {
  server.close(function () {
    process.exit(0);
  });
});
