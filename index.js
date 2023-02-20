// Importamos http y filesystem
const http = require('http')
const fs = require('fs')

// Declaramos el servidor
const server = http.createServer((req, res)=>{
  // Creamos un recurso de lectura de archivo html
  const read = fs.createReadStream('./static/index.html')
  
  // Escribimos el archivo html mediante un canal (pipe) hacia la respuesta (res) 
  read.pipe(res)
})

