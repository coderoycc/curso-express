const express = require('express')

const router = express.Router()

router.get('/query', (req, res) => {
  console.log(req.query)
  res.send('Recibido')
})

router.get('/search', (req, res) => {
  if(req.query.q){
    return res.send(`Su búsqueda "${req.query.q}" será procesada`)
  }
  res.send('Búsqueda: encuentra lo que busca')
})

// Exportamos las rutas cargadas a la aplicación
module.exports = router