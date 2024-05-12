require('dotenv').config()
const express = require('express')

const { connectDB } = require('./src/config/db')

const gamesRouter = require('./src/api/router/game')
const consolasRouter = require('./src/api/router/consolas')
const usersRoutes = require('./src/api/router/users')
const cloudinary = require('cloudinary').v2
const cors = require('cors')

const app = express()

connectDB()
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(express.json())
app.use(cors())

app.use('/api/v1/games', gamesRouter)
app.use('/api/v1/consolas', consolasRouter)
app.use('/api/v1/users', usersRoutes)

app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong')
})

app.use('*', (req, res, next) => {
  return res.status(400).json('Rute not found')
})

app.listen(8080, () => {
  console.log('http://localhost:' + 8080)
})
