const express = require('express');
const router = express.Router();
// const path = require('path');
const { loginUser, registerUser } = require('../controllers/auth');
const upload = require('../midlewares/upload');
const { validateLoginFields, validateSignupFields } = require('../midlewares/validator');



router.post('/login', validateLoginFields, loginUser);
router.post('/signup', upload.single('imageUrl'), registerUser);

module.exports = router;