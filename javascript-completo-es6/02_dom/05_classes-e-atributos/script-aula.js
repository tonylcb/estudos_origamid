const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
menu.classList.toggle("azul");
if (menu.classList.toggle("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// modo antigo de adicionar classe
menu.className = menu.className + " vermelho"; //ou
menu.className += " vermelho";

// Atributos

const animais = document.querySelector(".animais");

console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");
img.setAttribute("alt", "É uma raposa");
const possuiAlt = img.hasAttribute("alt"); // verifica se existe tal atributo
img.removeAttribute("alt");

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
