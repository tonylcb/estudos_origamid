//                   Tudo é objeto

const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

//                   Arrow Function

const upperName = (name) => name.toUpperCase();

//                   Desestruturação

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));
document.addEventListener('click', handleMouse);

//                    Rest e Spread

// Rest
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'Tony', 'André', 'Rafael');

//Spread
const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, numeros, 24, 32, 32];
console.log(numeros2);

const carro = {
  cor: 'Azul',
  portas: 4,
};

carroAno = { ...carro, ano: 2008 };

console.log(carro);

//                    Modules

import quadrado from './quadrado.js';
import numeroAleatorio from './numero-aleatorio.js';

console.log(quadrado.perimetroQuadrado(5));
console.log(numeroAleatorio());

//                    Fetch e Async

fetch('https://...')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

// mesma coisa de:

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos('https://...');

//                    Map e Filter

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => preco.includes('R$'));
const precosNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);

console.log(precosNumeros);

//                    Expressões

const grupoA = 100; // é uma expressão
const grupoB = 200; // é uma expressão

if (grupoA > grupoB) {
  console.log('Grupo A venceu');
} else {
  console.log('Grupo B venceu');
} // não é uma expressão

const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu'; // é uma expressão
console.log(vencedor);

const active = true;
const button = active && 'Botão está ativo';

console.log(button);
