const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const usersRouter = require('./routes/users')
const { homeRouter } = require('./routes')

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// PUG
app.set('view engine', 'pug')
app.set('views', 'views')

const port = process.env.PORT || 3000

app.use(homeRouter)
app.use(usersRouter)

app.use((req, res, next) => {
  res.status(404).render('404', { layout: false, pageTitle: 'Page not found', path: '' })
})

app.listen(port, () => {
  console.log(`App running on http:localhost:${port}`)
})