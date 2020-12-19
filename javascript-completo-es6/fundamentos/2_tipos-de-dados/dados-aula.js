// Para saber que tipo de dado está na variável (typeof)

var nome = "Tony";
var idade = 29;
var gostoMusical;
var time = null;
var simbolo = Symbol();
console.log(typeof nome);

// Strings

var nome = "Tony";
var sobrenome = "Carvalho";
var nomeCompleto = nome + " " + sobrenome;
var exemploBarra = 'Esse é o "melhor" jogo';

console.log(exemploBarra);

// Números

var idade1 = 29;
var idade2 = 32;

var somaDasIdades = idade1 + idade2;

console.log(somaDasIdades);

// String + Números

var nome = "Tony";
var idade = 29;
var frase = nome + " tem " + idade + " anos.";
console.log(typeof frase);
console.log(frase);

// Template String

var gols = 500;
var frase2 = `Romário fez ${gols * 2} gols.`;
console.log(frase2);
