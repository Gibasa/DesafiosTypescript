// Desafioa 1
let employee = {
    code : 0,
    name : ""
};

employee.code = 10;
employee.name = "Jhon"

//Desafio 2

enum Profissao {
    Padeiro,
    Padeira,
    Atriz,
    Ator,
    Desenvolvedora,
    Desenvolvedor,
    Barista
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const maria :Pessoa = {
    nome : "maria",
    idade : 29,
    profissao : Profissao.Ator
};

const roberto : Pessoa = {
    nome : "Roberto",
    idade : 19,
    profissao: Profissao.Padeiro
}

const laura: Pessoa = {
    nome: "Raura",
    idade: 32,
    profissao: Profissao.Atriz
}
const carlos: Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}

//Desafio 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let total = 0

if(campoSaldo){
    campoSaldo.innerHTML = ""
}

function somarAoSaldo(soma:number) {
    total += soma
    if(campoSaldo){
    campoSaldo.innerHTML += total;
    }
    return total;
}

function limparSaldo() {
    if(campoSaldo){
    campoSaldo.innerHTML = '';
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        if (soma && campoSaldo){
        campoSaldo.innerHTML = ""    
        somarAoSaldo(Number(soma.value));
        console.log(total);
        }
});
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
});
}

