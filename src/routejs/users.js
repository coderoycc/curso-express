/**
 * Manera tradicional de usar route para express 
 */
function UsersRoutes(app) {
  app.all('/users', (req, res) => {
    //Usamos render para renderizar archivos (vistas) EJS
    res.render('user', { title: 'HOLA AMIGO' })
  })

  app.get('/about', (req, res) => {
    res.send('Más sobre nuestros clientes')
  })
}

module.exports = UsersRoutes

