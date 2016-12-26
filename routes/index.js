let multer = require('multer')
let bodyParser = require('body-parser')
let path = require('path')
let fs = require('fs')
let appRoot = process.env.PWD
let jvPath = appRoot + '/public/views.json'

module.exports = {
  getIndex: function (req, res) {
    let readJViews = JSON.parse(fs.readFileSync(jvPath)).hits
    let n = Number.parseInt(readJViews, 10) + 1
    fs.writeFileSync(jvPath, '{ \"hits\": \"' + n + '\" }')
    console.log(n + " from: " + req.ip)
    res.render('index', {views: n.toLocaleString()});
  }

  postIndex: function(req, res) {
    console.log(res)
  }
}
