console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.434343));

console.log(parseFloat(' 1321.213'));
console.log(parseFloat('100 reais'));
console.log(parseInt('100.123'));
console.log(parseInt(24));

const preco = 10.123142;
console.log(preco.toFixed(2)); // 10.12

let valor = 48.49;
valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(valor);

//                  Math

Math.PI; // retorna o valor de Pi
Math.abs(-5.5); // 5.5
Math.ceil(4.98123); // arredonda sempre para cima
Math.floor(4.1392); // arredonda sempre para baixo
Math.round(4.4812); // arredonda normal
Math.max(4, 90, 69, 48); // retorna o maior valor
Math.min(4, 90, 69, 48); // retorna o menor valor

Math.random(); // retorna um número aleatório de 0 a 1
const aleatorio = Math.floor(Math.random() * 500); // retorna um número inteiro aleatório de 0 a 500
// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1) + 32);
//                         (max - min + 1) + min)
