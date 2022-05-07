const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const helpers = require('./helpers/handlebars')

app.use(express.static('public'))

app.engine('handlebars', engine({
    helpers: helpers
}))

app.set('view engine', 'handlebars')


app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/sobre', (req, res) =>{
    res.render('sobre')
})

app.get('/users', (req, res) =>{
    let usuario = {
        nome: "Pedro",
        email: "pedro@email.com",
    }
    res.render('users', {
        user: usuario, // o do lado esquerdo é como eu vou chamar o atributo no front e o direito é o 
        auth: true
    })

})

app.get('/user/:id', (req, res) =>{
    const userId = req.params.id

    res.render('user', {
        userId: userId
    })
})

app.use((req,res)=>{
    res.status(404).render('404')
})

/*
app.get('/sobre', (req, res) =>{
    res.sendFile(path.resolve("sobre.html"))
})

app.get('/quem-somos', (req, res) =>{
    res.sendFile(path.resolve("quem-somos.html"))
})


*/
/* Inicia a rota */
app.listen(8080, ()=> {
    console.log("Servidor iniciado!")
})


