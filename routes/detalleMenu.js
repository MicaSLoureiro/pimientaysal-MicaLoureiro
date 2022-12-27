var express = require('express');
var router = express.Router();
let {menu} = require('../controllers/detalleMenuController')
/* GET menu listing. */
router.get('/:id', menu);

module.exports = router;
