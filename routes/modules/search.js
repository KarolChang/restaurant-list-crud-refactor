const express = require('express')
const router = express.Router()
const restList = require('../../restaurant.json')

// search function
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const restaurant = restList.results.filter((restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase())))
  res.render('index', { restaurant: restaurant, keyword: keyword })
})

module.exports = router