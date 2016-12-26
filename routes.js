var express = require('express');
var router = express.Router();
var users = require('./routes/users');

console.log('Got to routes.js')
router.get('/users', users.getUser);

module.exports = router;
