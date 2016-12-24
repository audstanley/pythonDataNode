var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    logger = require('express-logger');

var app = express();

//middleware
app.use('/uploads/', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.set('trust proxy', true);
app.use(logger('default'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
  var jvPath = __dirname + '/public/views.json'
  var readJViews = JSON.parse(fs.readFileSync(jvPath)).hits
  var n = Number.parseInt(readJViews, 10) + 1
  fs.writeFileSync(jvPath, '{ \"hits\": \"' + n + '\" }')
  console.log(n + " from: " + req.ip)
  res.render('index', {views: n});
  //console.log("Main Page Viewed.")
});

app.get('/uploads', function (req, res) {
var uploadsPath = __dirname + '/uploads/'
var files = fs.readdirSync(uploadsPath)
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


app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req, res) {
    var regexFileExtension = /\.[0-9a-z]{1,5}$/;
    //console.log(req.body); //form fields
    //console.log(req.file); //form files
    //console.log(req.file.originalname); //form file
    var extension = req.file.originalname.toLowerCase().match(regexFileExtension)[0]
    //console.log("The extension is: " + extension)
    fs.rename(req.file.path, req.file.path + extension, function(err) {
      if(err) throw err
      else console.log('File upload successful: ' + req.file.originalname +
                     '\n                        To: ' + req.file.filename + extension)
    })
    res.redirect('/uploads')
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
