var express = require('express');
var main = require('./routes/index');

var router = express.Router();

router.route('/').get(main.getIndex);
router.route('/').post(main.postIndex);

module.exports = router;
