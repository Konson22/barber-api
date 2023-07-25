const express = require('express');
const router = express.Router();

const { getAllBarbers, getSingleBarber } = require('../controllers/barbers');

router.get('/', getAllBarbers);
router.get('/profile', getSingleBarber);

module.exports = router;