/**
 * Manera tradicional de usar route para express 
 */
function UsersRoutes(app) {
  app.all('/users', (req, res) => {
    //Usamos render para renderizar archivos (vistas) EJS
    const users = [
      {
        id:1,
        name:'Roberto'
      },
      {
        id:2,
        name:'Rocio'
      },
      {
        id:3,
        name:'Carlos'
      },
      {
        id:4,
        name:'Kelly'
      }
    ]
    res.render('user', { server: true, users })
  })

  app.get('/about', (req, res) => {
    const text = 'Contáctenos al +62427292622'
    res.render('about', { text })
  })
}

module.exports = UsersRoutes

