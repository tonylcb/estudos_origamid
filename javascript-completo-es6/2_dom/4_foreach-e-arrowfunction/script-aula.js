const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// transformar arrays-like em array

const titulos = document.getElementByClassName("titulo"); // isso da uma lista HTML
const titulosArray = Array.from(titulos); // transformando em array

console.log(titulos);
console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Arrow Function

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});
// transformando em arrow function
imgs.forEach((item, index, array) => {
  console.log(item, index, array);
});
// simplificando o código da função
let i = 0;

imgs.forEach(function () {
  console.log(i++);
});
imgs.forEach((item) => console.log(i++)); // sem chaves somente quando tem uma linha
