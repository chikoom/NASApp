const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const router = require('./routes/api')
require('dotenv').config()

const app = express()
const { PORT, DB_USER, DB_PASS, DB_NAME } = process.env

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.funb1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
)

// var corsOptions = {
//   origin: 'http://localhost:3002',
// }
// app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  )

  next()
})

app.use('/', router)

app.listen(PORT, function () {
  console.log(`SERVER UP! :: ${PORT}`)
})
