const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop; // mostra distancia do elemento acima
console.log(animaisTop);

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft; // mostra distancia do elemento à esquerda

console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect(); // mostra vários dados de distância

console.log(h2rect.top);

if (h2rect.top < 0) {
  console.log("Passou do elemento");
} // opção de interatividade com o scroll

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

// matchMedia() - semelhante ao media query do CSS

// DICA:
// Selecione o elemento no inspetor(dom)
// Abra o console e digite $0 para selecionar o mesmo
// Os elementos selecionados anteriormente são $1, $2 ...
