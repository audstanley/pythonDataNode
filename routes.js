var express = require('express');
var router = express.Router('mergeParams');
var users = require('./routes/users');

console.log(router.params.id)
router.get('/users', users.getUser);

module.exports = router;
