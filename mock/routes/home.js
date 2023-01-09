const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send('This is Thinkpower Vue Labs Mock API!')
})

module.exports = router
