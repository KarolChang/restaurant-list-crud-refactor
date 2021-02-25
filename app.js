// require modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()

// set handlebars engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set method-override
app.use(methodOverride('_method'))

// set routes
app.use(routes)

// listen app server
app.listen(3000, () => {
  console.log('App server is listening on http://localhost:3000')
})