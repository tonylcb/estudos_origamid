// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var campeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem 'O Brasil ganhou a copa de ${ano}'

for (var ano = 0; ano < campeao.length; ano++) {
  console.log(`O Brasil ganhou a copa de ${campeao[ano]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (fruta = 0; fruta < fruta.length; fruta++) {
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
