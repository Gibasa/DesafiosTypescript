"use strict";
// Desafioa 1
let employee = {
    code: 0,
    name: ""
};
employee.code = 10;
employee.name = "Jhon";
//Desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Padeira"] = 1] = "Padeira";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Ator"] = 3] = "Ator";
    Profissao[Profissao["Desenvolvedora"] = 4] = "Desenvolvedora";
    Profissao[Profissao["Desenvolvedor"] = 5] = "Desenvolvedor";
    Profissao[Profissao["Barista"] = 6] = "Barista";
})(Profissao || (Profissao = {}));
const maria = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Ator
};
const roberto = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const laura = {
    nome: "Raura",
    idade: 32,
    profissao: Profissao.Atriz
};
const carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
//Desafio 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let total = 0;
if (campoSaldo) {
    campoSaldo.innerHTML = "";
}
function somarAoSaldo(soma) {
    total += soma;
    if (campoSaldo) {
        campoSaldo.innerHTML += total;
    }
    return total;
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '';
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        if (soma && campoSaldo) {
            campoSaldo.innerHTML = "";
            somarAoSaldo(Number(soma.value));
            console.log(total);
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
