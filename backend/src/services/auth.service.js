const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const sql = require('../config/database')

const JWT_EXPIRES_IN = '7d'

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

async function authenticateUser(email, password) {
  const normalizedEmail = normalizeEmail(email)

  const rows = await sql`
    SELECT id, full_name, email, password_hash, email_verified
    FROM users
    WHERE email = ${normalizedEmail}
    LIMIT 1
  `

  if (rows.length === 0) {
    return null
  }

  const user = rows[0]

  if (!user.email_verified) {
    return null
  }

  const passwordValid = await bcrypt.compare(
    password,
    user.password_hash,
  )

  if (!passwordValid) {
    return null
  }

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    },
  )

  return {
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      email: user.email,
    },
  }
}

module.exports = {
  authenticateUser,
}
