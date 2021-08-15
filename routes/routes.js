const express = require('express');
const router = express.Router();
const polygonController = require('../controllers/polygonController');

router.get('/gold', polygonController.getGoldPrice);

module.exports = router;
