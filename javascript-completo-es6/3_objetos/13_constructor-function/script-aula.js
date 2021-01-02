function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Honda", 3000);
const fiat = new Carro("Fiat", 4000);

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoFinal;
  console.log(this);
}

const mazda = new Carro2("Mazda", 5000);

// -------------------------------------------------------------------

const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};

Dom.ativar();

Dom.seletor = "ul";
Dom.ativar();

// -------------------------------------------------------------------

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const lu = new Dom("ul");

const lastLi = new Dom("li:last-child");
lastLi.ativar("ativar");
