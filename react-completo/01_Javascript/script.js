//          Tudo é objeto

const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

//          Arrow Function

const upperName = (name) => name.toUpperCase();

//          Desestruturação

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

//          Rest e Spread

// Rest
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'Tony', 'André', 'Rafael');

// Spread
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
