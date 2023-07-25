const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check, validationResult } = require('express-validator');
const { loginUser, registerUser } = require('../controllers/auth');


const app = express();

// Set up the multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // The uploads folder where the images will be stored
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

// Create the multer instance
const upload = multer({ storage });

router.post('/login', loginUser);
router.post('/signup', registerUser);
// router.post('/signup', upload.single('image'), registerUser);

module.exports = router;