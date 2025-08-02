const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
  console.log('Middleware of /userss')
  res.send('<h3>Hello from /users</h3>')
})

app.use('/', (req, res, next) => {
  console.log('Middleware of /')
  res.send('<h3>Hello from /</h3>')
})

const PORT = 3000
app.listen(3000, () => console.log(`Running on http://localhost:${PORT}`))