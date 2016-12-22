var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs');

var app = express();

//middleware
app.use('/uploads/', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/uploads', function (req, res) {
  res.render('uploads', { list: fs.readdir(__dirname + '/uploads', function(err, items){
    console.log(__dirname + 'uploads')
    console.log(items)
  })});
});

app.get('/users/:id', function (req, res) {
  res.render('users', { title: "Hey ", message: "Hello there!", uid: req.params.id });
});


app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req, res) {
    var regexFileExtension = /(\w+)$/;
    //console.log(req.body); //form fields
    //console.log(req.file); //form files
    //console.log(req.file.originalname); //form files
    var extension = req.file.originalname.match(regexFileExtension)[0].toLowerCase()
    //console.log("The extension is: " + extension)
    fs.rename(req.file.path, req.file.path + "." + extension, function(err) {
      if(err) throw err
      else console.log('File upload successful: ' + req.file.originalname + '\n    To: ' + req.file.filename + "." + extension)
    })
    res.redirect(req.file.path + "." + extension)
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
