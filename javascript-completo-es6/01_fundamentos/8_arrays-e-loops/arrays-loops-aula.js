// Arrays

var videoGames = ["Switch", "PS4", "XBOX"];

var ultimoItem = videoGames.pop(); // retorna e remove o útlimo item da array

videoGames.push("Super Nitendo"); // adiciona um novo item na array e fica por último

videoGames.length; // mostra quantos itens tem na array

//--------------------------------------------------------------------------------------------

// For

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

// While

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (var i = 0; i <= videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

//--------------------------------------------------------------------------------------------

// forEach

var frutas = ["banana", "pera", "uva", "maca"];

frutas.forEach(function (fruta, index) {
  frutas.pop();
  console.log(fruta, index, frutas);
});
