const API_URL = 'https://api.mailersend.com/v1/email'

async function sendEmail({ to, subject, text }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: {
        email: process.env.MAILERSEND_FROM_EMAIL,
        name: process.env.MAILERSEND_FROM_NAME,
      },
      to: [{ email: to }],
      subject,
      text,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('MailerSend error:', error)
    throw new Error('Unable to send email')
  }
}

async function sendVerificationCode(email, otp) {
  await sendEmail({
    to: email,
    subject: 'Your CareerPilotAI verification code',
    text: `Your CareerPilotAI verification code is ${otp}. It expires in 10 minutes.`,
  })
}

module.exports = {
  sendVerificationCode,
}