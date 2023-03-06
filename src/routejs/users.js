/**
 * Manera tradicional de usar route para express 
 */
function UsersRoutes(app){
  app.all('/users', (req, res) => {
    res.send('Página donde se muestran los usuarios')
  })

  app.get('/about', (req, res) => {
    res.send('Más sobre nuestros clientes')
  })
}

module.exports = UsersRoutes

