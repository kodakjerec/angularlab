const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const home = require('./routes/home')
const product = require('./routes/product')

process.title = 'mockapi'
// CORS All Request
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-XSRF-TOKEN, True-Client-IP')
  next()
}

app.use(
  logger(
    ':date[iso] => :method :url :status :res[content-length] - :response-time ms',
    {
      skip: function (req, res) {
        return req.method.toUpperCase() === 'OPTIONS'
      }
    }
  )
)

app.use(bodyParser.json({ limit: 1024 * 1024 * 5, type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(allowCrossDomain)
app.use('/', home)
app.use('/product', product)

const PORT = 9999
app.listen(PORT, function () {
  console.log('HTTP Server is running on: http://localhost:%s', PORT)
})
