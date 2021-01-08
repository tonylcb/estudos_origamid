const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 100];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kia';

console.log(carros.length);

//          transformando uma lista em Array

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

//          Função construtora Array transformando um objeto em Array

const obj = {
  0: 'Andre',
  1: 'Rafael',
  2: 'Tony',
  3: 'Carvalho',
  length: 4,
};

const objArray = Array.from(obj);

//          isArray

Array.isArray(li); // false
Array.isArray(arrayLi); // true

//          criando arrays

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,,]
Array(5); // [,,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

//          length

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva verde']];

console.log(frutas[2][0].length);

//          métodos modificadores

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // organiza a array em ordem alfabética

const idades = [32, 45, 8, 12, 80, 65, 5];
idades.sort(); // não organiza em ordem crescente, mas em ordem crescente por casa decimal

console.log(instrumentos);
console.log(idades);

//          push e unshift

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari'); // adiciona os itens no início da array e mostra o length
const novaArray = carros.push('Parati', 'Gol'); // adiciona os itens no final da array e mostra o length

console.log(novaArray);
console.log(carros);

//          pop e shift

console.log(carros.pop()); // retorna e remove o último item da array
console.log(carros.shift()); // retorna e remove o primeiro item da array

//          reverse

console.log(carros.reverse()); // inverte e retorna a ordem da array

//          splice

console.log(carros.splice(2, 2, 'Fusca')); // adiciona 'Fusca' depois do item 2 e remove dois itens
console.log(carros);

//          copyWithin

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));
//  a partir do item 2, copiar o item 0 até o item antes do 2
// resultado ['Item1', 'Item2', 'Item1', 'Item2', 'Item5']

console.log(['Item1', 'Item2', 'Item3', 'Item4']).copyWithin(-1);
// resultado ['Item1', 'Item2', 'Item3', 'Item1']

//          fill

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5']).fill('Banana', 1, 3);
// resultado ['Item1', 'Banana', 'Banana', 'Banana', 'Item5']

//          MÉTODOS DE ACESSO

//          concat

const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];

transporte1.concat(transporte2, 'Patins'); // ['Barco', 'Avião', 'Carro', 'Moto', 'Patins']
[].concat(transporte1, transporte2); // ['Barco', 'Avião', 'Carro', 'Moto']

//          includes, indexOf, lastIndexOf

const linguagens = ['html', 'css', 'javascript', 'php', 'python', 'css'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.lastIndexOf('css'); // 5

//          join

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h3');

console.log(htmlString);

//          slice

const linguagens = ['html', 'css', 'javascript', 'php', 'python', 'css'];

linguagens.slice(2, 4);
// resultado ['javascript', 'php', 'python']
// slice() clona a array
