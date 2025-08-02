const userRouter = require('express').Router()
const path = require('path')
const rootDir = require('../utils/pathHelper')

userRouter.get('/users', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

module.exports = userRouter