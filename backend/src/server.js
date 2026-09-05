const express = require('express')
const cors = require('cors')
require('dotenv').config()

const sql = require('./config/database')

const app = express()
const authRoutes = require('./routes/auth.routes')
const protectedRoutes = require('./routes/protected.routes')
const googleAuthRoutes = require('./routes/google-auth.routes')

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/protected', protectedRoutes)
app.use('/api/auth', googleAuthRoutes)

app.get('/health', async (req, res) => {
  try {
    const result = await sql`SELECT NOW() AS current_time`

    res.json({
      success: true,
      message: 'CareerPilotAI backend is running',
      database: 'connected',
      time: result[0].current_time,
    })
  } catch (error) {
    console.error('Database error:', error)

    res.status(500).json({
      success: false,
      message: 'Database connection failed',
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `CareerPilotAI backend running on port ${PORT}`,
  )
})