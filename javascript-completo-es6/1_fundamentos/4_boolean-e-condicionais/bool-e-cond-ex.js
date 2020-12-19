// Verifique se a sua idade é maior do que a de algum parente

var idadeTony = 20;
var idadeJonas = 35;

// Dependendo do resultado coloque no console 'É maior', 'É igual', ou 'É menor'

if (idadeTony > idadeJonas) {
  console.log("É maior");
} else if (idadeTony === idadeJonas) {
  console.log("É igual");
} else (idadeTony < idadeJonas) {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?

var expressão = 5 - 2 && 5 - " " && 5 - 2; // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy

var nome = "Andre"; // T
var idade = 28; // T
var possuiDoutorado = false; // F
var empregoFuturo; // F
var dinheiroNaConta = 0; // F

// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('Brasil tem menos habitantes')
} 

// O que irá aparecer no console?

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?

if(('Gato' === 'gato') || (5>2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}