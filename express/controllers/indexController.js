module.exports = class IndexController{
    static index(req, res){
        let usuario = [
            {
                name: "Pedro",
                email: "pedro@email.com"
            },
            {
                name: "Maria",
                email: "maria@email.com"
            }            
        ]
        res.render('index', {
            user: usuario, // o do lado esquerdo é como eu vou chamar o atributo no front e o direito é o 
            auth: true
        })
    } 
}