const express = require('express');
const router = express.Router();

const { getAllUsers, getUserProfile } = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/profile', getUserProfile);

module.exports = router;