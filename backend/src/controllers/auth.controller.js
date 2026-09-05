const sql = require('../config/database')
const {
  createVerificationCode,
  verifyCode,
} = require('../services/otp.service')
const { authenticateUser } = require('../services/auth.service')

const PENDING_SIGNUP_MINUTES = 15

function normalizeEmail(email) {
  return email.trim().toLowerCase()
}

async function requestSignupOtp(req, res) {
  try {
    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email and password are required.',
      })
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters.',
      })
    }

    const normalizedEmail = normalizeEmail(email)

    const existingUser = await sql`
      SELECT id
      FROM users
      WHERE email = ${normalizedEmail}
      LIMIT 1
    `

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'An account with this email already exists.',
      })
    }

    const bcrypt = require('bcryptjs')
    const passwordHash = await bcrypt.hash(password, 12)

    const expiresAt = new Date(
      Date.now() + PENDING_SIGNUP_MINUTES * 60 * 1000,
    )

    await sql`
      INSERT INTO pending_signups
        (full_name, email, password_hash, expires_at)
      VALUES
        (${fullName.trim()}, ${normalizedEmail}, ${passwordHash}, ${expiresAt})
      ON CONFLICT (email)
      DO UPDATE SET
        full_name = EXCLUDED.full_name,
        password_hash = EXCLUDED.password_hash,
        expires_at = EXCLUDED.expires_at
    `

    await createVerificationCode(normalizedEmail)

    res.json({
      success: true,
      message: 'Verification code sent.',
    })
  } catch (error) {
    console.error('Signup OTP error:', error)

    res.status(500).json({
      success: false,
      message: 'Unable to send verification code.',
    })
  }
}

async function verifySignupOtp(req, res) {
  try {
    const { email, otp } = req.body

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and verification code are required.',
      })
    }

    const normalizedEmail = normalizeEmail(email)

    const verified = await verifyCode(normalizedEmail, otp)

    if (!verified) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verification code.',
      })
    }

    const pendingSignup = await sql`
      SELECT *
      FROM pending_signups
      WHERE email = ${normalizedEmail}
        AND expires_at > NOW()
      LIMIT 1
    `

    if (pendingSignup.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Signup session has expired. Please register again.',
      })
    }

    const signup = pendingSignup[0]

    await sql`
      INSERT INTO users
        (full_name, email, password_hash, email_verified)
      VALUES
        (
          ${signup.full_name},
          ${signup.email},
          ${signup.password_hash},
          TRUE
        )
    `

    await sql`
      DELETE FROM pending_signups
      WHERE email = ${normalizedEmail}
    `

    res.json({
      success: true,
      message: 'Account created successfully.',
    })
  } catch (error) {
    console.error('OTP verification error:', error)

    res.status(500).json({
      success: false,
      message: 'Unable to verify email.',
    })
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      })
    }

    const result = await authenticateUser(email, password)

    if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      })
    }

    res.json({
      success: true,
      message: 'Login successful.',
      token: result.token,
      user: result.user,
    })
  } catch (error) {
    console.error('Login error:', error)

    res.status(500).json({
      success: false,
      message: 'Unable to sign in.',
    })
  }
}

module.exports = {
  requestSignupOtp,
  verifySignupOtp,
  login,
}
