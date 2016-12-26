let bodyParser = require('body-parser')
let path = require('path')
let fs = require('fs')
let appRoot = process.env.PWD

module.exports = {
  getUser: function (req, res) {
    console.log(req)
    res.render(appRoot + '/views/users', { title: "Hey ", message: "Hello there!", uid: req.params.id })
  }
}
