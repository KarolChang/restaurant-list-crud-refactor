// require mongoose
const mongoose = require('mongoose')
// connect to mongodb
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
// get status of connection
const db = mongoose.connection
// set action of connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db