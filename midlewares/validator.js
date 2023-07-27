const express = require('express');
const { body, validationResult } = require('express-validator');


const app = express();

// Validation middleware for email and string fields
const validateLoginFields = [
  body('email')
  .trim()
  .isEmail()
  .normalizeEmail()
  .toLowerCase()
  .withMessage('Invalid email address'),
  body('password')
  .trim()
  .isLength(5)
  .withMessage('length must be greater then 5'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];


// Validation middleware for email and string fields
const validateSignupFields = [
  body('email').trim().isEmail().normalizeEmail().toLowerCase().withMessage('Invalid email address'),
  body('password').trim().isLength(5).withMessage('length must be greater then 5'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateLoginFields, validateSignupFields };