// Boolean e if else

var possuiGratuacao = false;

if (possuiGraduacao) {
  console.log("É verdadeiro");
  var x = 10;
} else {
  console.log("É falso");
}

console.log(x);

// Condicionais else if

var possuiGratuacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("É verdadeiro");
  var x = 10;
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

// Operador lógico de negação !

// if (!true) false
// if(!1) false
// if(!'') true
// if(!undefined) true
// if(!!' ')  true
// if(!!'')  false

// Igual e diferente

var x = 10;

console.log(x === 10);

var x = Gato;

console.log(x !== "gato");

// Operadores lógicos &&

// true && true; true
// true && false; false
// false && true; false
// 'Gato' && 'Cão'; 'Cão'
// (5 - 5) && (5 + 5); 0
// 'Gato' && false; false
// (5 >= 5) && (3 < 6); true

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("falso");
}

var condicional2 = 5 - 5 || (5 + 5 && 10 - 2);

if (condicional2) {
  console.log("Verdadeiro", condicional2);
}

// Switch

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a floresta.");
    break;
  default:
    console.log("Feche os olhos.");
}
