const express = require('express')

const {
  requestSignupOtp,
  verifySignupOtp,
  login,
} = require('../controllers/auth.controller')

const router = express.Router()

router.post('/signup/request-otp', requestSignupOtp)
router.post('/signup/verify-otp', verifySignupOtp)
router.post('/login', login)

module.exports = router