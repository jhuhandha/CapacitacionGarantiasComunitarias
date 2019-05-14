const express = require('express');

var { guardar } = require('./../controller/usuario');

var router = express.Router();

router.post('/usuario', guardar);

module.exports = router;
