const usersRouter = require('express').Router()
const homeData = require('./index')

usersRouter.get('/users', (req, res) => {
  const { people } = homeData

  try {
    res.status(200).render('users', {
      people,
      pageTitle: 'Users Page',
      path: '/users',
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = usersRouter
