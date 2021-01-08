const comida = 'Pizza';
const agua = new String('Agua ');

console.log(agua.length);

//          charAt

const frase = 'A melhor comida';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 1));

//          concat

const frase = 'A melhor linguagem é ';
const linguagem = 'Javascript';

const fraseFinal = frase.concat(linguagem);

//          includes, startsWith e endsWith

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 14));

console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));

//          slice ou substring

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao3.slice(0, 3));
console.log(transacao3.substring(0, 3)); // não pega negativo

//          indexOf ou lastIndexOf

const fruta = 'Banana';

console.log(fruta.indexOf('B'));
console.log(fruta.lastIndexOf('n'));

//          padStart e padEnd

const listaPrecos = ['R$ 99,00', 'R$ 199,00', 'R$ 12000'];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10, '-'));
});

//          repeat

const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa

//          replace

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ');

console.log(listaItens);

//          split

const arrayLista = listaItens.split(', ');

console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];

//          toLowerCase e toUpperCase

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === feminino);
console.log(sexo1.toUpperCase() === FEMININO);

//          trim

const valor = '   R$ 30,00   ';
valor.trim(); // 'R$ 30,00'
valor.trimStart(); // 'R$ 30,00   '
valor.trimEnd(); // '   R$ 30,00'
