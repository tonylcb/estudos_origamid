const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"');

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

// Diferença entre HTMLlist e Nodelist

const gridSectionHTML = document.getElementByClassName("grid-section"); // pegar a classe
const gridSectionNode = document.querySelectorAll(".grid-section"); // pegar a classe

primeiraUl.classList.add("grid-section"); // adicionar classe ao elemento

console.log(gridSectionHTML); // adicionou a classe
console.log(gridSectionNode); // não adicionou a classe

gridSectionNode.forEach(function (item, index) {
  console.log(item);
}); // mostra em loop os itens do elemento

const arrayGrid = Array.from(gridSectionHTML); // transforma o array-like em array

arrayGrid.forEach(function (item) {
  console.log(item);
});
