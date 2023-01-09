const express = require('express')
const router = express.Router()
const faker = require('@faker-js/faker')
const map = require('lodash/map')
const range = require('lodash/range')

const genDatas = (times = 1, fn) => map(range(times), (n) => fn(n))

router.post('/list', function (req, res) {
  const rowCounter = faker.random.number({ 'min': 0, 'max': 8 })
  const data = {
    isSuccess: true,
    message: '',
    data: genDatas(rowCounter, () => {
      return {
        prodId: faker.random.uuid(),
        prodName: faker.random.words(faker.random.number({ 'min': 1, 'max': 3 })),
        prodImg: faker.image.imageUrl(150, 100, 'food', true, false)
      }
    })
  }
  res.status(200).json(data)
})

router.post('/detail', function (req, res) {
  const prodId = req.body.prodId
  if (prodId) {
    const isSuccess = faker.random.arrayElement([true, true, true, false])
    res.status(200).json({
      isSuccess,
      message: isSuccess ? '' : '發生錯誤，請稍後重新再試。',
      data: isSuccess ? {
        prodId,
        prodName: faker.random.words(faker.random.number({ 'min': 1, 'max': 3 })),
        prodImg: faker.image.imageUrl(150, 100),
        amount: faker.finance.amount(10, 5000, 0),
        width: faker.random.number({ 'min': 100, 'max': 200 }) + ' mm',
        height: faker.random.number({ 'min': 100, 'max': 200 }) + ' mm',
        weight: faker.random.number({ 'min': 100, 'max': 200 }) + ' 公克',
        description: faker.lorem.words(faker.random.number({ 'min': 10, 'max': 30 }))
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
