function somar(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(somar.name); // somar
console.log(somar.length); // 3

//                    call
// executa a função

function darOi(nome) {
  console.log('Oi para você ' + nome);
}

darOi.call({}, 'André');

// outro exemplo

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // retorna frutas

// exemplo mais real

// 1 - criando função ativo a partir do construtor Dom

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const ul = new Dom('ul');

const li = {
  element: document.querySelector('li'),
};

ul.ativo.call(li, 'ativo'); // o call aponta para a variável li, apesar de começar na variável ul

//                    array-like e call

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});

console.log(filtro);

//                    apply
// consegue receber uma array, diferentemente do call

//                    bind
// para executar apenas alguns argumentos selecionados da função

const carro = {
  marca: 'Ford',
  ano: 2008,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda, 100); // o 100 já seria o 'aceleracao'
