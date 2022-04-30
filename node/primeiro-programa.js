const minimist = require("minimist")

const argumentos = minimist(process.argv.slice(2))

class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
let pessoa = new Pessoa(argumentos.nome, argumentos.idade, argumentos.profissao);
console.log(pessoa)