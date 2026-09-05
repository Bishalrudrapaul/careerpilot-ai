const express = require('express')
const passport = require('../services/google-auth.service')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/api/auth/google/failure',
  }),
  (req, res) => {
    const token = jwt.sign(
      {
        userId: req.user.id,
        email: req.user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      },
    )

    res.redirect(
      `http://localhost:5173/dashboard?token=${encodeURIComponent(token)}`,
    )
  },
)

router.get('/google/failure', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'Google authentication failed.',
  })
})

module.exports = router
