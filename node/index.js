// const moduloSomar = require('./somar') //Variavel moduloSomar é para que o modulo nao se perca

// console.log(moduloSomar.somar(5,9))
// console.log(moduloSomar.subtrair(9,3))

// const OS = require('os')

// console.log(OS.type())

// const minimist = require("minimist")

//  const argumentos = minimist(process.argv.slice(2))

//  console.log(argumentos.nome)

//Função Assincrona e Sincrona

// const fs = require('fs')
// console.log("Inicio")
// fs.writeFileSync("Arquivo.sincrono.txt", "Esse é um teste Sincrono")// WriteFileSYNC cria arquivo Sincrono, o 1° parametro é o nome do arquivo e o segundo é o conteudo
// console.log("Fim")
// console.log("Inicio")
// fs.writeFile("Arquivo.assincrono.txt", "Esse é um teste Sincrono", function (error) {
//     console.log("Arquivo criado com sucesso!")
// })// WriteFile cria arquivo Assíncrono, o 1° parametro é o nome do arquivo e o segundo é o conteudo a função é para confirmar se quando o arquivo foi criado
// console.log("Fim")

// try {
//    const valor = 2;
//    let resultado = valor + 1;
//     if (resultado !=2) {
//         throw new Error("O resultado é diferente de 2...")
//     }
// } catch (error) {
//     console.log("Erro ao realizar esta operação! " + error)
// }

const path = require('path')
const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.resolve("index.html"))
})

app.get('/sobre-nos', function(req, res) {
    res.send("Você está na página sobre nós")
})

app.get('/cursos', function(req, res) {
    res.send("Você está na página de cursos")
})

app.listen(8080, function(){
    console.log("Servidor inicializado com sucesso")
    
})