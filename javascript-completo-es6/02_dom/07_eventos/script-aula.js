const img = document.querySelector("img");

function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback);

// --------------------------------------------------------
// target

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

animaisLista.addEventListener("click", callbackLista);

// prevent default

const linkExterno = document.querySelector('a[href^="http]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
  console.log(this); // retorna o elemento, o mesmo que event.currentTarget
}

linkExterno.addEventListener("click", handleLinkExterno);

// tipos de eventos

click;
mouseenter;
mousemove;
scroll;
resize;
keydown;

// keyboard

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handleKeyboard);

// forEach e Eventos

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
