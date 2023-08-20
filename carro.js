// codigo do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 100, 150, 210, 270, 318];
let velocidadeCarros = [3, 2.5, 3.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    );
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passoutodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passoutodaATela(xCarro) {
  return xCarro < -50;
}
