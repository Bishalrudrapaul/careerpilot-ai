require('dotenv').config()

const sql = require('./src/config/database')

async function checkUsers() {
  try {
    const rows = await sql`
      SELECT id, full_name, email, email_verified, created_at
      FROM users
      ORDER BY created_at DESC
      LIMIT 10
    `

    console.table(rows)
  } catch (error) {
    console.error(error)
  } finally {
    await sql.end()
  }
}

checkUsers()
