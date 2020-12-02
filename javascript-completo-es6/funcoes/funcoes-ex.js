// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
  return !!dado;
}

var oiTruthy = isTruthy("oi");
console.log(oiTruthy);

// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

var nomeComp = nomeCompleto("Tony", "Carvalho");
console.log(nomeComp);

// Crie uma função que verifica se um número é par

function par(numero) {
  var resto = numero % 2;
  if (resto === 0) {
    return "É par.";
  } else {
    return "Não é um número par";
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(argumento) {
  return typeof argumento;
}

// addEventListener é uma função nativa do Javascript
// o primeiro parâmetro é o evento que ocorre e o segundo Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Tony Carvalho");
});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
