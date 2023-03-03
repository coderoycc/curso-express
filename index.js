// Construcción simple sin EXPRESS


// // Importamos http y filesystem
// const http = require('http')
// const fs = require('fs')

// // Declaramos el servidor
// const server = http.createServer((req, res)=>{
//   // Creamos un recurso de lectura de archivo html
//   const read = fs.createReadStream('./static/index.html')

//   // Escribimos el archivo html mediante un canal (pipe) hacia la respuesta (res) 
//   read.pipe(res)
// })

// server.listen(3000, ()=>{
//   console.log("Servidor en el puerto 3000")
// })



// EXPRESS

const { json } = require('express')
const express = require('express')

// Declaramos la aplicacion 
const app = express()

// recepción de texto con express
app.use(express.text())
// Recepción de json con express
app.use(express.json())
// Recepción de formmularios con express
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => { // Cuando visiten la raiz
  // Ruta desde el sistema inicial hasta este proyecto
  console.log(__dirname)
  // Enviamos el archivo html mendiate sendFile(ruta, {ruta-raiz base})
  res.sendFile('./static/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.send('<h1>Esta página describe más de nosotros</h1>')
})

app.get('/clima', (req, res) => {
  res.send('Enviamos datos del clima')
})

//Enviamos una imagen a la peticion GET
app.get('/imagen', (req, res) => {
  res.sendFile('./static/cora.jpg', { root: __dirname })
})

//Enviar datos json
app.get('/json', (req, res) => {
  res.json({ hola: 'Putito', marica: 'Puto' })
})


// PETICIONES con verbos HTTP
app.post('/texto', (req, res) => { // recibimos texto en el body
  console.log(req.body)
  res.status(200).send('Llego tu comunicado')
})

app.post('/json', (req, res) => { // Recibimos json en el body
  console.log(req.body)
  res.status(200).send('Json recibido')
})

app.post('/form', (req, res) => {
  console.log(req.body)
  res.status(200).send('Recibido')
})


// Parametros (PARAMS)
app.get('/hello/:username/:random', (req, res) => {
  res.send(`Recibido, ${req.params.username}, ${req.params.random}`)
})


// QUERYS
app.get('/query', (req, res) => {
  console.log(req.query)
  res.send('Recibido')
})

app.get('/search', (req, res) => {
  if(req.query.q){
    return res.send(`Su búsqueda "${req.query.q}" será procesada`)
  }
  res.send('Búsqueda: encuentra lo que busca')
})


// Esta página se cargará despues de consultar las anteriores
app.use((req, res) => {
  // Respondemos con un status 404 de no encontrado
  res.status(404).send('No se encontró la página que busca')
})


app.listen(3000, () => {
  console.log("Aplicacion con EXPRESS corriendo en el puerto 3000")
})