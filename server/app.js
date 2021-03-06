require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const errorhandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorhandler)

module.exports = app
