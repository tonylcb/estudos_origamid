//                    forEach

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  array[index] = 'Teste';
  console.log(item, index, array);
});

console.log(carros);

//                    arrow function

const li = document.querySelectorAll('li');

li.forEach((i) => i.classList.add('ativa'));
// mesma coisa de:
li.forEach(function (item) {
  item.classList.add('ativa');
});

//                    map

// usa-se para retornar a array com possibilidade de modificá-la

const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(novaArray);
console.log(carros);

const numeros = [2, 3, 4, 5, 6];
const numerosX2 = numeros.map((n) => n * 2); // retorna uma array com o resultado

// exemplo prático

const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'HTML 3',
    min: 20,
  },
  {
    nome: 'HTML 4',
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

// outro exemplo

const nomeAulas = (aula) => aula.nome;
// mesma coisa de:
const nomeAulas = function (aula) {
  return aula.nome;
};

const arrayNomeAulas = aulas.map(nomeAulas);

//                   reduce

// retorna um valor final indicado pelo return
const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0);

// outro exemplo

const numeros = [10, 25, 39, 72, 46, 18, 8, 4, 27, 94];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) return anterior;
  else return atual;
}, 0);

// ou no ternário

const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
}, 0);

// ou abreviando

const maiorNumero = numeros.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0,
);

//                    reduceRight

// ordem inversa do reduce

//                    some

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
  return item === 'Uva'; // se algum item for 'Uva', retornará true
});

//                    every

const every = frutas.every((item) => {
  return item === 'Uva'; // se todos os itensforem 'Uva', retornará true
});

// outro exemplo

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQ3 = numeros.every((n) => n > 5); // se todos os itens forem maior que 5, true

//                    findIndex

const frutas = ['Banana', 'Pêra', 'Uva'];

const indexUva = frutas.findIndex((item) => {
  return item === 'Uvas';
}); // retorna o valor truthy

const indexUva = frutas.find((item) => {
  return item === 'Uvas';
}); // retorna o index truthy

//                    filter

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) => {
  console.log(item);
  return item;
});
// retorna ['Banana', 'Uva', 'Maçã']

// outro exemplo
const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter((x) => x > 45); // retorna [88, 101]

// outro exemplo
const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'HTML 3',
    min: 20,
  },
  {
    nome: 'HTML 4',
    min: 25,
  },
];

const maiores15 = aulas.filter((aula) => {
  return aula.min >= 15;
});
