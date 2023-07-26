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
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const exten = file.originalname.split('.')[1];
    const fileName = `${Date.now()}.${exten}`;
    req.imageUrl = fileName;
    cb(null, fileName);
  },
});

// Create the multer instance
const upload = multer({ storage });

router.post('/login', loginUser);
// router.post('/signup', registerUser);
router.post('/signup', upload.single('imageUrl'), registerUser);

module.exports = router;