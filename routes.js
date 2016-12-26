var express = require('express');
var router = express.Router();
var main = require('./routes/index');

console.log('Got to routes.js')
router.get('/', main.getIndex);
//router.route('/', main.postIndex());

module.exports = router;
