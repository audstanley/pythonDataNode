module.exports = {
  let multer = require('multer')
  let bodyParser = require('body-parser')
  let path = require('path')
  let fs = require('fs')
  let router = express.Router();

console.log('Got to our index.js')

  getIndex: function (req, res) {
    let jvPath = __dirname + '/public/views.json'
    let readJViews = JSON.parse(fs.readFileSync(jvPath)).hits
    let n = Number.parseInt(readJViews, 10) + 1
    fs.writeFileSync(jvPath, '{ \"hits\": \"' + n + '\" }')
    console.log(n + " from: " + req.ip)
    res.render('index', {views: n.toLocaleString()});
  });

  postIndex(multer({ dest: '../uploads/'}).single('upl'), function(req, res) {
      let regexFileExtension = /\.[0-9a-z]{1,5}$/;
      let extension = req.file.originalname.toLowerCase().match(regexFileExtension)[0]
      fs.rename(req.file.path, req.file.path + extension, function(err) {
        if(err) throw err
        else console.log('File upload successful: ' + req.file.originalname +
                       '\n                        To: ' + req.file.filename + extension)
      })
      res.redirect('../uploads')
      res.status(204).end();
  })

}
