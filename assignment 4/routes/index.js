const homeRouter = require('express').Router()

const people = []

homeRouter.get('/', (req, res) => {
  try {
    res.status(200).render('home', {
      pageTitle: 'Home Page',
      path: '/'
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

homeRouter.post('/', (req, res) => {
  const { name } = req.body

  try {
    people.push({ name })

    res.status(200).redirect('/users')
  } catch (err) {
    res.status(400).send(alert(err))
  }
})

module.exports = {
  homeRouter: homeRouter,
  people
}
