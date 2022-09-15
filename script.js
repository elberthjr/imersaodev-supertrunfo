var carta0 = {nome: "",imagem: "https://yt3.ggpht.com/ytc/AKedOLRTLqOnt6qd8Y3D4rvzluvOj5NTNYd-ko4Jq5GhAw=s900-c-k-c0x00ffffff-no-rj", 
              atributos: { vida: "", speed: "", forca: "", dano: ""} };
var carta1 = {nome: "Jager",imagem: "https://i.pinimg.com/564x/0b/37/1f/0b371fbe909724e453e756cc379444b2.jpg", 
              atributos: { vida: 75, speed: 75, forca: 75, dano: 75} };
var carta2 = {nome: "Doc",imagem: "https://i.pinimg.com/474x/1a/f2/08/1af2082d3a954c61f91eaf09d14176bf.jpg", 
              atributos: { vida: 100, speed: 50, forca: 75, dano: 75} };
var carta3 = {nome: "Pulse",imagem: "https://i.pinimg.com/236x/1c/63/7e/1c637e20c2d4a1fdfa1819e23abb5185.jpg", 
              atributos: { vida: 50, speed: 100, forca: 75, dano: 75} };
var carta4 = {nome: "Smoke",imagem: "https://i.pinimg.com/236x/23/0f/59/230f593502a0febb2db683d25802ed3c.jpg", 
              atributos: { vida: 75, speed: 50, forca: 100, dano: 75} };
var carta5 = {nome: "Maverick",imagem: "https://i.pinimg.com/474x/ec/bb/5c/ecbb5c5207e162aec5d24920b271fe22.jpg", 
              atributos: { vida: 75, speed: 75, forca: 50, dano: 100} };
var carta6 = {nome: "Nomad",imagem: "https://i.pinimg.com/474x/b0/c7/e2/b0c7e24d25a13fda98428232f813b87e.jpg", 
              atributos: { vida: 75, speed: 75, forca: 100, dano: 50} };
var carta7 = {nome: "Jackal",imagem: "https://i.pinimg.com/474x/1f/9b/c3/1f9bc300605f300e18fd4ffcee94a727.jpg", 
              atributos: { vida: 75, speed: 100, forca: 50, dano: 75} };
var carta8 = {nome: "Ash",imagem: "https://i.pinimg.com/236x/c0/b9/57/c0b957f87f1127cda3dd9253ffbc915e.jpg", 
              atributos: { vida: 100, speed: 75, forca: 50, dano: 75} };
var carta9 = {nome: "Finka",imagem: "https://i.pinimg.com/474x/9d/15/db/9d15db1d534e7e9856f9b56552b9c564.jpg", 
              atributos: { vida: 75, speed: 50, forca: 100, dano: 75} };
var carta10 = {nome: "Ela",imagem: "https://i.pinimg.com/236x/bc/1b/d4/bc1bd4873c80a46efd53d235c6220d7a.jpg", 
              atributos: { vida: 75, speed: 75, forca: 75, dano: 75} };

var cartas = [ carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina;
var cartaJogador;
var baralhoJog = [];
var baralhoMaq = [];
var vencedor;
var partidas = 0;
var placar = [0, 0, 0];

function iniciarJogo() {
  resetaTela();

  divideCartas();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  document.getElementById("info-center").innerHTML =
    "Escolha o Atributo<br><br> do Combate";

  var btnJogar = document.getElementById("btnJogar");
  btnJogar.disabled = true;
  btnJogar.classList.remove("button:active");
  document.getElementById("btnJogar").innerHTML = "Duelar";
}

function continuarDuelando() {
  resetaTela();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha
  document.getElementById("info-center").innerHTML =
    "Escolha o Atributo<br><br> do Combate";

  // muda o contexto do botão para a opção duelar
  document.getElementById("btnJogar").disabled = true;

  document.getElementById("btnJogar").innerHTML = "Duelar";
}

function divideCartas() {
  var baralhoTemp = cartas.slice();
  var carta;

  baralhoJogador = [];
  baralhoMaquina = [];

  while (baralhoTemp.length > 0) {
    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoJogador.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);

    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoMaquina.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);
  }
}

function sorteiaCartas() {
  cartaJogador = parseInt(Math.random() * baralhoJogador.length);
  cartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
}

function resetaTela() {
  document.getElementById("left-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-left").style.backgroundImage = "";
  document.getElementById("attribs-left").innerHTML = "";

  document.getElementById("info-center").innerHTML =
    "Vamos Duelar! <br><br> Aceita o Desafio?";

  document.getElementById("right-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-right").style.backgroundImage = "";
  document.getElementById("attribs-right").innerHTML = "";
}

function exibeCarta(carta, posicao) {
  var label = document.getElementById(posicao + "-label");
  var divCard = document.getElementById("card-" + posicao);
  var divAttribs = document.getElementById("attribs-" + posicao);
  var attribs = "";

  if (posicao == "left") {
    attribs = '<br><div class="line-info">' + carta.nome + "</div><br>";
    for (var atributo in carta.atributos) {
      attribs +=
        '<div class="line-info"><input class="kunai" type="radio" name="atributo"value="' +
        atributo +
        '" onchange="testaRadio()">';
      attribs += atributo + ": " + carta.atributos[atributo] + "</div>";
    }
    divAttribs.innerHTML = attribs + "<br><br>";
  }

  label.style.color = "#dcdcdc";
  divCard.style.backgroundImage = 'url("' + carta.imagem + '")';
  document.getElementById("div-end").style.opacity = "0.8";
}

function testaRadio() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      document.getElementById("btnJogar").disabled = false;
      document.getElementById("btnJogar").onclick = function () {
        jogar();
      };
    }
  }
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      return radioAtributo[radio].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var resultado = document.getElementById("info-center");
  var radios = document.getElementsByName("atributo");

  if (
    baralhoJogador[cartaJogador].atributos[atributoSelecionado] >
    baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
  ) {
    computaResultado(1);
  } else if (
    baralhoJogador[cartaJogador].atributos[atributoSelecionado] <
    baralhoMaquina[cartaMaquina].atributos[atributoSelecionado]
  ) {
    computaResultado(2);
  } else {
    computaResultado(0);
  }

  if (baralhoJogador.length == 0 || baralhoMaquina.length == 0) {
    fimDeJogo();
  } else {
    document.getElementById("btnJogar").onclick = function () {
      continuarDuelando();
    };
  }
}

function computaResultado(resultado) {
  var painelInfo = document.getElementById("info-center");
  ganhador = resultado;
  placar[resultado] += 1;
  partidas++;

  exibeCarta(baralhoMaquina[cartaMaquina], "right");
  imprimeResultado();

  if (ganhador == 1) {
    baralhoJogador.push(baralhoMaquina[cartaMaquina]);
    baralhoMaquina.splice(cartaMaquina, 1);
  }

  if (ganhador == 2) {
    baralhoMaquina.push(baralhoJogador[cartaJogador]);
    baralhoJogador.splice(cartaJogador, 1);
  }
  atualizaPlacar();
}

function imprimeResultado() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divDest;
  var text;
  var carta;
  var id = "empatou";
  var idMaquina;

  if (ganhador == 1) {
    id = "ganhou";
    idMaquina = "perdeu";
    mensagemResultado = "Você Ganhou!";
  } else if (ganhador == 2) {
    id = "perdeu";
    idMaquina = "ganhou";
    mensagemResultado = "Você Perdeu!";
  }

  for (var local of ["attribs-left", "attribs-right"]) {
    divDest = document.getElementById(local);
    if (local == "attribs-left") {
      carta = baralhoJogador[cartaJogador];
    } else {
      carta = baralhoMaquina[cartaMaquina];
      if (ganhador != 0) {
        id = idMaquina;
      }
    }

    text = '<br><div class="line-info">' + carta.nome + "</div><br>";
    var inicio = '<div class="line-info" ';
    for (var linha in carta.atributos) {
      text += inicio;
      if (linha == atributoSelecionado) {
        text += 'id="' + id + '" ';
      }
      text += ">" + linha + ": " + carta.atributos[linha] + "</div>";
    }
    divDest.innerHTML = text + "<br>";
  }
}

function atualizaPlacar() {
  var painelInfo = document.getElementById("info-center");
  var labelCentral = document.getElementById("center-label");
  var labelPartidas = document.getElementById("partidas");
  var cartasJogador = document.getElementById("cartas-jogador");
  var cartasMaquina = document.getElementById("cartas-maquina");
  var mensagemResultado = "Deu Empate!";
  var id = "empatou";

  if (ganhador == 1) {
    id = "ganhou";
    mensagemResultado = "Você Ganhou!";
  } else if (ganhador == 2) {
    id = "perdeu";
    mensagemResultado = "Você Perdeu!";
  }

  painelInfo.innerHTML = mensagemResultado;

  labelCentral.style.color = "#dcdcdc";
  labelCentral.innerHTML = placar[1] + " x " + placar[2];

  labelPartidas.innerHTML = "Partidas: " + partidas;
  cartasJogador.innerHTML = "Cartas: " + baralhoJogador.length;
  cartasMaquina.innerHTML = "Cartas: " + baralhoMaquina.length;
}

function fimDeJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");
  var mensagem;

  if (ganhador == 1) {
    mensagem = "Parabéns!!!<br><br>Você venceu<br><br>o Torneio!";
  } else {
    mensagem = "Que Pena!<br><br>Você perdeu<br><br>o Torneio!";
  }

  painelInfo.innerHTML = mensagem;
  botao.innerHTML = "Reiniciar Jogo";
  botao.setAttribute("onclick", "reiniciarJogo()");
}

function reiniciarJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");

  partidas = 0;
  placar = [0, 0, 0];

  resetaTela();
  document.getElementById("center-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("div-end").style.opacity = "0";
  document.getElementById("partidas").innerHTML = "Partidas: 0";
  document.getElementById("cartas-jogador").innerHTML = "Cartas: 4";
  document.getElementById("cartas-maquina").innerHTML = "Cartas: 4";

  painelInfo.innerHTML = "Vamos Duelar! <br><br> Aceita o Desafio?";

  botao.innerHTML = "Iniciar Duelos";
  botao.onclick = function () {
    iniciarJogo();
  };
}
