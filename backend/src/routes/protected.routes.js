const express = require('express')

const { authenticateToken } = require('../middleware/auth.middleware')

const router = express.Router()

router.get('/me', authenticateToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  })
})

module.exports = router
