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

## CONFIGURACIONES EN EXPRESS
- Se definen desde la instancia de la aplicacion `app.set('llave', 'Valor')`
- Estas configuraciones se podran acceder con `app.get('llave')`

## STATICS FILES 
- Express permite declarar una carpeta que sea estática que puede ser accedida desde cualquier navegador.
- Para usarla se declara un MIDDLEWARE `app.use(express.static('./carpeta'))`
- Comunmente siempre va al final, para que primero se busquen solo rutas y finalmente archivos publicos
- También se puede poner un prefijo para poder diferenciar los archivos públicos de las rutas. `app.use('/public',express.static('./carpeta'))` 
- Los nombre de las carpetas suelen llamarse public o static
- Si se requiere declara más carpetas públicas - estáticas se pone en otro middleware

## EXPRESS ROUTER
- Nos permite dividir las rutas en diferentes archivos para que sea mantenible.
- Una forma es usando JavaScrio con el módulo **export** (usando archivos de routejs)
- Usando el método de **express.Router()**
  * Este método permite que se exporten desde otro archivo y se ejecuten en el archivo principal como un MIDDLEWARE

## TEMPLATE ENGINE
- Nos permite crear plantillas html usando javascript con el motor de express
- Para el curso se utiliza EJS como motor de vistas `view engine`
* En el archivo principal se debe importar la libreria EJS
* Después de eso, configurar express con `app.set('view engine', 'ejs')` y con `app.set('views', ruta_de_la_carpeta_views)`
* En la carpeta views escribir codigo html en archivos con extensión _ejs_ 
* Para mostrar el archivo en alguna ruta usar `res.render('nombreArchivo', { variables })` el nombre del archivo va sin extensión y las variables que se pueden usar en el archivo _.ejs_ se envian en un objeto 

## MÁS SOBRE EJS (PARTIALS|porciones)
- Una utilidad de EJS es que se puede incrustar porciones de html en otros archivos para volver a utilizar

**NOTA**: Tambien existen otros motores de Plantillas como HANDLEBARS

## FUNCIONES ASINCRONAS EN EXPRESS
- Sirve para realizar peticiones a otros servidores (Bases de datos, servidores externos)
- **USAMOS npm AXIOS para hacer peticiones a otros servidores**
- Usamos también, **json placeholder** que contiene datos que envian en forma de API

