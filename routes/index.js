var express = require('express');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs');
var router = express.Router();

router.get('/', function (req, res) {
  let jvPath = __dirname + '/public/views.json'
  let readJViews = JSON.parse(fs.readFileSync(jvPath)).hits
  let n = Number.parseInt(readJViews, 10) + 1
  fs.writeFileSync(jvPath, '{ \"hits\": \"' + n + '\" }')
  console.log(n + " from: " + req.ip)
  res.render('index', {views: n.toLocaleString()});
  //console.log("Main Page Viewed.")
});

router.post('/', multer({ dest: './uploads/'}).single('upl'), function(req, res) {
    let regexFileExtension = /\.[0-9a-z]{1,5}$/;
    let extension = req.file.originalname.toLowerCase().match(regexFileExtension)[0]
    //console.log("The extension is: " + extension)
    fs.rename(req.file.path, req.file.path + extension, function(err) {
      if(err) throw err
      else console.log('File upload successful: ' + req.file.originalname +
                     '\n                        To: ' + req.file.filename + extension)
    })
    res.redirect('/uploads')
    res.status(204).end();
})

module.exports = router;
