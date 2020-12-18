// Atribuição

var numero = 20;

numero += 10; //numero = numero + 10
console.log(numero);

// Ternário

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? true : false;
console.log(podeBeber);

// If abreviado

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui Faculdade");
else console.log("Não possui Faculdade");
