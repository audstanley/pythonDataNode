let bodyParser = require('body-parser')
let path = require('path')
let fs = require('fs')
let appRoot = process.env.PWD
let param = req.params.id

module.exports = {
  getUser: function (req, res) {
    console.log(param)
    res.render(appRoot + '/views/users', { title: "Hey ", message: "Hello there!", uid: req.params.id })
  }
}
