import express, { urlencoded } from 'express'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

import path from 'path'

import db from './src/db/config/index'
import route from './src/routes/index'

// [ Middleware ]
app.use(express.static(path.join(__dirname, 'src', 'public')))
app.use(express.json())
app.use(express.urlencoded( {
  extended: true
}))


// Connect db
db.connect()

// Init route
route(app)


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
