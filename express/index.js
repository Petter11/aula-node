const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebars')
const routes = require('./routes')

app.use(express.static('public'))
app.engine('handlebars', engine({
    helpers: helpers
}))
app.set('view engine', 'handlebars')
app.use('/', routes)


/* Inicia a rota */
app.listen(8080, ()=> {
    console.log("Servidor iniciado!")
})


