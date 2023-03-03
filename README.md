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
- Para recibir datos de formularios simples se usa `app.use(express.urlencoded({extended: false}))`
**Nota**: Los datos se encuentran en el _body_ de la petición (request)
<hr>

- Para recibir parámetros se hace de la siguiente manera
```js
app.get('/ruta/:variable/:variable...', (req, res) => {
  //CODE
})
```
Las variables son los parámetros que se esperan en la ruta y se recuperan con `req.params`

### QUERIES
- Nos permite obtener variables en las peticiones 
- En las rutas se expresan como **/hola/nombre?x=2**
- Los valores se obtienen: `req.query`
- `req.query` devuelve un objeto con todas las variables
- Cuando se repite un nombre (variable) del query, entonces se crea un array con todos los valores. `/search?prueba=betto&prueba=andres&prueba=jose` entonces {prueba=[betto,andres,jose]}

## Función ALL
- `app.all('ruta', (req,res)=>{})`
- Es una ruta que funciona con todos los métodos HTTP **POST, GET, PUT, DELETE**

## MIDDLEWARES
- Funciona como un intemediario antes de ingresar a la ruta solicitada
- Se usa con el método USE
```js
app.use((req, res, next) => {
  //Operaciones
  console.log(req.url, req.method)

  // Proteger las rutas (PONER ANTES DE LAS RUTAS A PROTEGER)
  //autenticacion 
  // Permisos de usuario}

  next() 
  // Para pasar a que muestre la ruta
})
```
- Instalando MORGAN tenemos middleware pre-creado 
