const { Router } = require('express')
const axios = require('axios')

const router = Router()

/**
 * Funcion que hace peticion a otro servidor, usa funciones asíncronas
 */
router.get('/posts', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const { data } = response
  res.render('posts', { posts: data, })
})

module.exports = router