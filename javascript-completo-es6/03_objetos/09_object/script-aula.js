const pessoa = new Object({
  nome: 'André',
});

const carro = {
  marca: 'Marca',
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
};

const honda = Object.create(carro).init('Honda');
const ferrari = Object.create(carro).init('Ferrari');

//                    assign

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel, carro);

//                    defineProperties
// muda propriedades do objeto

const moto = {};

Object.defineProperties(moto, {
  rodas: {
    // value: 2,
    // configurable: false, // não pode mais deletar, propriedade já vem padrão false
    // writable: true, // pode escrever/mudar o valor
    get() {
      return this._rodas;
    },
    set() {
      this._rodas = valor * 4 + ' Total Rodas';
    },
  },
});

//                      getOwnPropertyDescriptors
// mostra as propriedades enumeráveis relacionadas ao objeto e ao objeto construtor

Object.getOwnPropertyDescriptors(Array);
Object.getOwnPropertyDescriptor(window, 'innerHeight');

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  'innerHeight',
);

//                    keys
// só enumeráveis
const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return 2;
    },
    set(valor) {
      this._rodas = valor * 4 + ' Total rodas';
    },
  },
});

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  'innerHeight',
);

//                    getOwnPropertyNames
// mostra propriedades de array (não enumeráveis)

Object.getOwnPropertyNames(Array);

//                    getPrototypeOf
// mostra o protótipo do valor mostrado

const frutas = ['Banana'];
Object.getPrototypeOf(frutas); // mesma coisa de Array.prototype

//                    Object.is
// mostra se o objeto é idêntico a outro

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false, os objetos são diferentes e independentes

const novaFruta = frutas1;
Object.is(frutas1, frutas2); // true

//                    freeze, seal, preventExtensions

const carro = {
  marca: 'Ford',
  ano: 2018,
};

Object.freeze(carro); // congela o objeto, impedindo de adicionar, modificar e excluir propriedades
Object.isFronzen(carro); // verifica

Object.seal(carro); // previne que adicione e delete novas propriedades, mas permite mudança das anteriores
Object.isSealed; // verifica

Object.preventExtensions(carro); // previne que adicione novas propriedades, mas permite deletar antigas
Object.isExtensible(carro); // verifica

//                    hasOwnProperty('prop') e propertyIsEnumerable('prop')

const frutas = ['Banana', 'Pêra'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

//                    isPrototypeOf

Array.prototype.isPrototypeOf([]); // true

//                    toString

const frutas = ['Banana', 'Pêra'];

const frase = 'Oi frase';

const somar = function (a, b) {
  return a + b;
};

const carro = {
  marca: 'Ford',
};

const li = document.querySelectorAll('li');
typeof li; // object

console.log(frutas.toString()); // Banana,Uva
console.log(frase.toString()); // Oi frase
console.log(somar.toString()); // function (a, b) {return a + b;};
console.log(carro.toString()); // [object Object]

console.log(Object.prototype.toString.call(frutas)); // [object Array]
console.log(Object.prototype.toString.call(frase)); // [object String]
console.log(Object.prototype.toString.call(somar)); // [object Function]
console.log(Object.prototype.toString.call(li)); // [object NodeList]
