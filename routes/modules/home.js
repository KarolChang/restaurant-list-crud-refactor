const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

// put default info to index-page
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// sort function
const currentSort = { name: '店名(正序)', name_desc: '店名 (反序)', category: '類別 (正序)', category_desc: '類別 (反序)', rating_desc: '評比 (由高到低)', rating: '評比 (由低到高)' }
router.post('/', (req, res) => {
  const sort = req.body.sort
  const sortName = currentSort[sort]
  if (sort.includes('_desc')) {
    const index = sort.indexOf('_')
    const sortDesc = sort.slice(0, index)
    Restaurant.find()
      .lean()
      .sort({ [sortDesc]: 'desc' })
      .then(restaurant => res.render('index', { restaurant, sort: sortDesc, sortName }))
      .catch(error => console.error(error))
  } else {
    Restaurant.find()
      .lean()
      .sort({ [sort]: 'asc' })
      .then(restaurant => res.render('index', { restaurant, sort, sortName }))
      .catch(error => console.error(error))
  }
})

module.exports = router


