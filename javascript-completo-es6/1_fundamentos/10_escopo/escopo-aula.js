// Escopo de Função

var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is no defined

// Escopo de bloco
// {} Já cria um bloco

if (true) {
  let mes = "Dezembro"; // com var o Escopo vaza, mas com let e const o Escopo de bloco não vaza
  console.log(mes);
}

console.log(mes); // Erro, mes is no defined

// const

const semana = "Sexta";
semana = "Quinta"; // Erro, não pode mudar uma constante
const semana = "Quinta"; // Erro, não pode mudar uma constante

const data = {
  ano: 2018,
  mes: "Dezembro",
};

data.ano = 2019; // Funciona
data.dia = 25; // Funciona

// let

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
