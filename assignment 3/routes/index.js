const router = require('express').Router()
const path = require('path')
const rootDir = require('../utils/pathHelper')

const userRouter = require('./user')

router.use(userRouter)

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = router