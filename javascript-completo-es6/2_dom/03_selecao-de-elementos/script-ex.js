// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll("img");
console.log(todasImagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const somenteImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(somenteImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"');

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
//ou
const animais = document.querySelector(".animais-descricao");
const animais = animais.querySelector("h2");

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
//ou
console.log(paragrafos[--paragrafos.length]);
