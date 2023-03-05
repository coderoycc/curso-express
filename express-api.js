const express = require('express')
const morgan = require('morgan')

const app = express()
let products = [
  {
    id: 1,
    name: "laptop",
    price: 200
  }
]
app.use(morgan('dev')) // Middleware
app.use(express.json()) // Middleware para manejar datos

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => { return p.id === Number(id) })
  if(!product) return res.status(404).send('no encontrado')
  res.send(product)
})

app.post('/products', (req, res) => {
  //Añadir producto
  const obj = { ...req.body, id: products.length + 1 }
  products.push(obj)
  res.status(200).send(obj)
})

app.put('/products/:id', (req, res) => { // Actualizar
  const id = req.params.id;
  const data = req.body
  const product = products.find((p) => { return p.id === Number(id) })
  if(!product) return res.status(404).send('no encontrado')
  
  products = products.map((p) => p.id === Number(id) ? {...p, ...data} : p )
  res.json({
    msg: "OK"
  })
})

app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => { return p.id === Number(id) })
  if(!product) return res.status(404).send('no encontrado')
  
  products = products.filter((p) => p.id !== Number(id))
  res.send("Valor eliminado")
})


app.listen(3000)
console.log(`Server on Port ${3000}`)
