// Opearções Binários

var numero = 2e-2;
console.log(numero);

var exponencial = 2 ** 2;
console.log(exponencial);

var resto = 14 % 5;
console.log(resto);

var subtracao1 = 100 - 50;
var subtracao2 = "100" - 50;

var multiplicacao1 = 100 * 2;
var multiplicacao2 = "100" * "2";

// é possível verificar se uma variável é NaN (not a number) ou não com a função 'isNaN()'

var testeNaN = "Isso é 100" / 2;
console.log(isNaN(testeNaN));

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

soma1 = 10 + 10 + 20 + (30 * 4) / 2;
console.log(soma1);

//------------------------------------------------------------------------------------------

// Operadores Unários

var x = 5;
console.log(x++);
console.log(x);

var idade = "29";
var somaIdade = 5;

console.log(+idade + somaIdade); // 34
