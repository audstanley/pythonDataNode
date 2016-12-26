var express = require('express');
var main = require('./routes/index');

var router = express.Router();

router.route('/up').get(main.getIndex);
router.route('/up').post(main.postIndex);

module.exports = router;
