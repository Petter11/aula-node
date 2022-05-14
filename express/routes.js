const { Router} = require('express')
const router = Router()
const IndexController = require('./controllers/indexController')
const UsersController = require('./controllers/usersController')

router.get('/',IndexController.index)

router.get('/sobre', (req, res) =>{
    res.render('sobre')
})

router.get('/users', UsersController.showUsers)

router.get('/user/:id', (req, res) =>{
    const userId = req.params.id

    res.render('user', {
        userId: userId
    })
})

router.use((req,res)=>{
    res.status(404).render('404')
})

/*
router.get('/sobre', (req, res) =>{
    res.sendFile(path.resolve("sobre.html"))
})

router.get('/quem-somos', (req, res) =>{
    res.sendFile(path.resolve("quem-somos.html"))
})


*/

module.exports = router