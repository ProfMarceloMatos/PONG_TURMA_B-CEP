let comprimentoTela = 800;
let larguraTela = 600;
let xBolinha = 100;
let yBolinha = 100;
let diametroBolinha = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raioBolinha = diametroBolinha / 2;
let xRaquete = 20
let yRaquete = larguraTela / 2 - 60;
let larguraRaquete = 10;
let comprimentoRaquete = 80;
let xRaqueteOponente = comprimentoTela - larguraRaquete - 20;
let yRaqueteOponente = larguraTela / 2 - 60;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(100);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  //colideraquete();
  colisaoBolinha(xRaquete, yRaquete);
  colisaoBolinha(xRaqueteOponente, yRaqueteOponente);
  mostraPlacar();
  marcaPonto();
}

function criaBolinha(){
    circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colideBolinha(){
  if(xBolinha + raioBolinha > comprimentoTela || xBolinha - raioBolinha < 0){
     velocidadeXBolinha *= -1
     }
  
  if(yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0){
     velocidadeYBolinha *= -1
     }  
}

function criaRaquete(posicaoX, posicaoY){
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete)
}

function moveRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  yRaqueteOponente = yBolinha - comprimentoRaquete / 2
}

/*
function colideraquete(){
  if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + comprimentoRaquete && yBolinha + raioBolinha > yRaquete){
       velocidadeXBolinha *= -1;
     }
}
*/

function colisaoBolinha(posicaoX, posicaoY){
  colidiu = collideRectCircle(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete, xBolinha, yBolinha, diametroBolinha)
  if(colidiu){
     velocidadeXBolinha *= -1;
     }
}
function mostraPlacar(){
  fill(255);
  textSize(30);
  text(meusPontos, 200, 50);
  text(pontosOponente, 600, 50);
}

function marcaPonto(){
  if(xBolinha > 795){
    meusPontos += 1
  }
  if(xBolinha < 5){
    pontosOponente += 1
  }
}




