const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const sql = require('../config/database')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value?.trim().toLowerCase()

        if (!email) {
          return done(new Error('Google account email not available.'))
        }

        const fullName =
          profile.displayName ||
          `${profile.name?.givenName || ''} ${profile.name?.familyName || ''}`.trim()

        const existingUser = await sql`
          SELECT id, full_name, email, email_verified
          FROM users
          WHERE email = ${email}
          LIMIT 1
        `

        if (existingUser.length > 0) {
          return done(null, existingUser[0])
        }

        const newUser = await sql`
          INSERT INTO users
            (full_name, email, password_hash, email_verified)
          VALUES
            (
              ${fullName || 'CareerPilotAI User'},
              ${email},
              '',
              TRUE
            )
          RETURNING id, full_name, email, email_verified
        `

        return done(null, newUser[0])
      } catch (error) {
        console.error('Google authentication error:', error)
        return done(error)
      }
    },
  ),
)

module.exports = passport
