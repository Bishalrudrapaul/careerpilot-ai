const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const sql = require('../config/database')
const { sendVerificationCode } = require('./email.service')

const OTP_EXPIRY_MINUTES = 10

function generateOtp() {
  return crypto.randomInt(100000, 1000000).toString()
}

async function createVerificationCode(email) {
  const otp = generateOtp()
  const otpHash = await bcrypt.hash(otp, 10)

  const expiresAt = new Date(
    Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000,
  )

  await sql`
    DELETE FROM email_verification_codes
    WHERE email = ${email}
  `

  await sql`
    INSERT INTO email_verification_codes
      (email, otp_hash, expires_at)
    VALUES
      (${email}, ${otpHash}, ${expiresAt})
  `

  await sendVerificationCode(email, otp)
}

async function verifyCode(email, otp) {
  const rows = await sql`
    SELECT *
    FROM email_verification_codes
    WHERE email = ${email}
      AND verified_at IS NULL
      AND expires_at > NOW()
    ORDER BY created_at DESC
    LIMIT 1
  `

  if (rows.length === 0) {
    return false
  }

  const record = rows[0]

  if (record.attempts >= 5) {
    return false
  }

  const isValid = await bcrypt.compare(otp, record.otp_hash)

  if (!isValid) {
    await sql`
      UPDATE email_verification_codes
      SET attempts = attempts + 1
      WHERE id = ${record.id}
    `

    return false
  }

  await sql`
    UPDATE email_verification_codes
    SET verified_at = NOW()
    WHERE id = ${record.id}
  `

  return true
}

module.exports = {
  createVerificationCode,
  verifyCode,
}