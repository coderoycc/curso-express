# CURSO DE EXPRESS
Express es un framework para el Backend que se ejecuta con NODEJS. 


## Verbos - Methodos HTTP
- GET: Peticion simple
- POST: Crear algun datos (BODY)
- PUT: Actualizar datos (BODY)
- DELETE: Eliminar algun dato (BODY)
Todas las peticiones se procesan de la misma manera, usando la aplicacion con el metodo
```js
app.get('ruta/endpoint', (req,res)=>{})
app.post(enpoint, function)
app.delete(endpoint, function)
app.put(endpoint, function)
```

## Recepción de datos 
- Para recibir texto y que express lo pueda interpretar se debe usar `app.use(express.text())`
- Para recibir json y que express lo pueda interpretar se debe usar `app.use(express.json())`
- Para recibit datos de formularios simples se usa `app.use(express.urlencoded({extended: false}))`
**Nota**: Los datos se encuentran en el _body_ de la petición (request)
<hr>

- Para recibir parámetros se hace de la siguiente manera
```js
app.get('/ruta/:variable/:variable...', (req, res) => {
  //CODE
})
```
Las variables son los parámetros que se esperan en la ruta y se recuperan con `req.params`


