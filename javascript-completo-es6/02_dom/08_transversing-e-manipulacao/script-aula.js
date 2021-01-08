// innerHTML, outerHTML, innerText

const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");
console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.outerHTML = "<p>Novo Título</p>";

// Transversing

const lista = document.querySelector(".animais-descricao");

console.log(lista.parentElement.parentElement); // puxa o elemento pai
console.log(lista.nextElementSibling); // puxa o proximo elemento na mesma hierarquia
console.log(lista.previousElementSibling); // puxa o elemento anterior na mesma hierarquia
console.log(lista.children[0]); // puxa os filhos do elemento (lista HTML)

console.log(lista.children[--lista.children.length]); // puxa o último filho do elemento
//ou
console.log(lista.querySelector("li:last-child"));

// Element vs Node

console.log(lista.childNodes); // puxa todo tipo de ação dentro do HTML
console.log(lista.previousSibling);

// manipulando elementos

console.log(lista.previousSibling);

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = contato.querySelector(".mapa");

animais.appendChild(titulo); // insere 'titulo' para ultimo filho de 'animais'
contato.insertBefore(animais, titulo); // insere 'animais' para 'contato' antes de 'titulo'
contato.removeChild(titulo); // remove 'titulo' dentro de 'contato'
contato.replaceChild(mapa, titulo); // troca 'titulo' por 'mapa' dentro de 'contato'

// Criando novos elementos

const novoh1 = document.createElement("h1"); // criando um novo elemento chamado 'h1'
novoh1.innerText = "Novo Título"; // colocando um texto no novo elemento
novoh1.classList.add("titulo"); // colocando uma classe no novo elemento

mapa.appendChild(novoh1); // inserindo o novo elemento após último filho de 'mapa'

// clonando elementos

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add("azul");
faq.appendChild(cloneH1);
