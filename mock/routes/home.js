const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.send({msg:'This is Angular Labs Mock API!'})
})

module.exports = router
