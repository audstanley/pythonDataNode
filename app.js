let express = require('express')
let multer = require('multer')
let bodyParser = require('body-parser')
let path = require('path')
let fs = require('fs')


const app = express();

//middleware
app.use('/uploads/', express.static(path.join(__dirname, 'uploads')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//routes:
app.get('/', function (req, res) {
  let jvPath = __dirname + '/public/views.json'
  let readJViews = JSON.parse(fs.readFileSync(jvPath)).hits
  let n = Number.parseInt(readJViews, 10) + 1
  fs.writeFileSync(jvPath, '{ \"hits\": \"' + n + '\" }')
  console.log(n + " from: " + req.ip)
  res.render('index', {views: n.toLocaleString()});
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req, res) {
    let regexFileExtension = /\.[0-9a-z]{1,5}$/;
    let extension = req.file.originalname.toLowerCase().match(regexFileExtension)[0]
    fs.rename(req.file.path, req.file.path + extension, function(err) {
      if(err) throw err
      else console.log('File upload successful: ' + req.file.originalname +
                     '\n                        To: ' + req.file.filename + extension)
    })
    res.redirect('/uploads')
    res.status(204).end();
})

app.get('/uploads', function (req, res) {
let uploadsPath = __dirname + '/uploads/'
let files = fs.readdirSync(uploadsPath)
files.sort(function(a, b) {
               return fs.statSync(uploadsPath + a).mtime.getTime() -
                      fs.statSync(uploadsPath + b).mtime.getTime();
});
    res.render('uploads', {fileList: files.reverse()});
    console.log("Uploads Viewed.")
});

app.get('/users/:id', function (req, res) {
  res.render('users', { title: "Hey ", message: "Hello there!", uid: req.params.id });
});


//Express listen:
app.listen(3000, function () {
  console.log('App listening on port 3000!');
  console.log('pid is ' + process.pid);
});

//Process ID:
process.on('SIGTERM', function () {
  server.close(function () {
    process.exit(0);
  });
});
