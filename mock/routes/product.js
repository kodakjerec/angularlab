const express = require('express')
const router = express.Router()
const Chance = require('chance')
const map = require('lodash/map')
const range = require('lodash/range')

const genDatas = (times = 1, fn) => map(range(times), (n) => fn(n))
const chance = new Chance()


router.post('/list', function (req, res) {
  let imgSrcList = ["food1.jpg", "food2.jpg", "food3.jpg"];
  const rowCounter = chance.integer({ min: 0, max: 10 });
  const data = {
    isSuccess: rowCounter>0?true:false,
    message: '',
    data: genDatas(rowCounter, () => {
      return {
        prodId: chance.name(),
        prodName: chance.name(),
        prodImg: 'assets/pics/'+imgSrcList[chance.integer({ min:0, max:2})]
      }
    })
  }
  res.status(200).json(data)
})

router.post('/detail', function (req, res) {
  const prodId = req.body.prodId
  if (prodId) {
    const isSuccess = chance.bool({likelihood: 80})
    res.status(200).json({
      isSuccess,
      message: isSuccess ? '' : '發生錯誤，請稍後重新再試。',
      data: isSuccess ? {
        prodId,
        prodName: chance.name(),
        prodImg: chance.avatar(),
        amount: chance.integer({ 'min': 100, 'max': 200 }),
        width: chance.integer({ 'min': 100, 'max': 200 }) + ' mm',
        height: chance.integer({ 'min': 100, 'max': 200 }) + ' mm',
        weight: chance.integer({ 'min': 100, 'max': 200 }) + ' 公克',
        description: chance.name()
      } : {}
    })
  } else {
    res.status(200).json({
      isSuccess: false,
      message: '請提供產品代號'
    })
  }
})

module.exports = router
