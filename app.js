//-------------------------------------------------------------------------
// Declaração de varáveis

// carta de interrogação
var carta0 = {
  nome: "",
  avatar:
    "https://64.media.tumblr.com/d2147116cc35eefa53b79263efc53355/95bb588b2870a6f6-1e/s540x810/1a02fddc4cf2981386eca53bccb171befee568bc.jpg",
  atributos: {
    attack: "",
    defense: "",
    speed: ""
  }
};

var carta1 = {
  nome: "Yoda",
  avatar:
    "https://www.gamelegends.it/wp-content/uploads/2017/03/Yoda-Star-Wars-1200x900.jpg",
  atributos: {
    attack: 4,
    defense: 3,
    speed: 5
  }
};

var carta2 = {
  nome: "Darth Vader",
  avatar:
    "https://olhardigital.com.br/wp-content/uploads/2020/11/20201130114919.jpg",
  atributos: {
    attack: 7,
    defense: 4,
    speed: 4
  }
};

var carta3 = {
  nome: "Luke Skywalker",
  avatar:
    "https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg",
  atributos: {
    attack: 7,
    defense: 4,
    speed: 3
  }
};

var carta4 = {
  nome: "Chewbacca",
  avatar:
    "https://i.pinimg.com/474x/8a/e4/d8/8ae4d8afbb1cd0dcb6ab341c6c6839eb.jpg",
  atributos: {
    attack: 4,
    defense: 3,
    speed: 4
  }
};

var carta5 = {
  nome: "Han Solo",
  avatar: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/02/Han-solo-movie.jpg",
  atributos: {
    attack: 3,
    defense: 4,
    speed: 4
  }
};

var carta6 = {
  nome: "Leia Organa",
  avatar: "https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/carrie_fisher.jpg",
  atributos: {
    attack: 4,
    defense: 4,
    speed: 4
  }
};

var carta7 = {
  nome: "Palpatine",
  avatar:
    "https://t.ctcdn.com.br/cwSUO1XCK46Tc6eQtW8YgGPd6u0=/512x288/smart/filters:format(webp)/i394287.jpeg",
  atributos: {
    attack: 6,
    defense: 5,
    speed: 4
  }
};

var carta8 = {
  nome: "Darth Maul",
  avatar:
    "https://disneyplusbrasil.com.br/wp-content/uploads/2021/02/Darth-Maul.jpg",
  atributos: {
    attack: 5,
    defense: 4,
    speed: 4
  }
};

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var baralhoJogador = [];
var baralhoMaquina = [];
var cartaMaquina;
var cartaJogador;
var ganhador;
var partidas = 0;
var placar = [0, 0, 0];

//-------------------------------------------------------------------------
// função que inicia o primeiro duelo do torneio
function iniciarJogo() {
  resetaTela();

  divideCartas();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha
  document.getElementById("info-center").innerHTML =
    "Choose Combat<br><br> Power";

  // muda o contexto do botão para a opção duelar
  var btnJogar = document.getElementById("btnJogar");
  btnJogar.disabled = true;
  btnJogar.classList.remove("button:active");
  document.getElementById("btnJogar").innerHTML = "Press Start";
}

//-------------------------------------------------------------------------
// funcao que inicia duelos seguintes do torneio
function continuarDuelando() {
  resetaTela();
  sorteiaCartas();

  exibeCarta(baralhoJogador[cartaJogador], "left");
  exibeCarta(carta0, "right");

  // Escolhendo o atributo de batalha
  document.getElementById("info-center").innerHTML =
    "Choose Combat<br><br> Power";

  // muda o contexto do botão para a opção duelar
  document.getElementById("btnJogar").disabled = true;

  document.getElementById("btnJogar").innerHTML = "Press Start";
}

//-------------------------------------------------------------------------
// funcão que cria os baralhos do jogador e da máquina
function divideCartas() {
  var baralhoTemp = baralho.slice();
  var carta;

  // Limpa os baralhos
  baralhoJogador = [];
  baralhoMaquina = [];

  while (baralhoTemp.length > 0) {
    // Adiciona uma carta para o Jogador
    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoJogador.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);

    // Adiciona uma carta para a maquina
    carta = parseInt(Math.random() * baralhoTemp.length);
    baralhoMaquina.push(baralhoTemp[carta]);
    baralhoTemp.splice(carta, 1);
  }
}

//-------------------------------------------------------------------------
// função que sorteia as cartas
function sorteiaCartas() {
  cartaJogador = parseInt(Math.random() * baralhoJogador.length);
  cartaMaquina = parseInt(Math.random() * baralhoMaquina.length);
}

//-------------------------------------------------------------------------
// funcao que volta a tela para a condição de inicio do jogo
function resetaTela() {
  // resetanto o painel da esquerda
  document.getElementById("left-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-left").style.backgroundImage = "";
  document.getElementById("attribs-left").innerHTML = "";

  // resetanto o painel central
  document.getElementById("info-center").innerHTML =
    "Let's Fight! <br><br> Choose Your Side!";

  // resetanto o painel da dieita
  document.getElementById("right-label").style.color = "rgba(0, 0, 0, 0)";
  document.getElementById("card-right").style.backgroundImage = "";
  document.getElementById("attribs-right").innerHTML = "";
}

//-------------------------------------------------------------------------
// funcao que exibe uma carta na tela
function exibeCarta(carta, posicao) {
  //var card = carta0;
  var label = document.getElementById(posicao + "-label");
  var divCard = document.getElementById("card-" + posicao);
  var divAttribs = document.getElementById("attribs-" + posicao);
  var attribs = "";

  if (posicao == "left") {
    // mostra os atributos da carta
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

  // deixa o label principal do div visivel
  label.style.color = "#dcdcdc";

  // mostra a carta
  divCard.style.backgroundImage = 'url("' + carta.avatar + '")';

  //exibe o painel final de informações
  document.getElementById("div-end").style.opacity = "0.8";
}

//-------------------------------------------------------------------------
// funcão que controla os casos de radio não selecionados
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

//-------------------------------------------------------------------------
// funcão que verifica qual atributo foi escolhido para o duelo
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var radio in radioAtributo) {
    if (radioAtributo[radio].checked) {
      return radioAtributo[radio].value;
    }
  }
}

//-------------------------------------------------------------------------
// funcão que dispara o duelo e compara as cartas
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

//-------------------------------------------------------------------------
// funcão que informa os resultados de duelas e computa os pontos
function computaResultado(resultado) {
  var painelInfo = document.getElementById("info-center");
  ganhador = resultado;
  placar[resultado] += 1;
  partidas++;

  exibeCarta(baralhoMaquina[cartaMaquina], "right");
  imprimeResultado();

  // transfere para o jogador a carta da máquina
  if (ganhador == 1) {
    baralhoJogador.push(baralhoMaquina[cartaMaquina]);
    baralhoMaquina.splice(cartaMaquina, 1);
  }

  // transfere para a máquina a carta do jogador
  if (ganhador == 2) {
    baralhoMaquina.push(baralhoJogador[cartaJogador]);
    baralhoJogador.splice(cartaJogador, 1);
  }
  atualizaPlacar();
}

//-------------------------------------------------------------------------
// funcão que imprime o resultado de um duelo
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
    mensagemResultado = "You Win!";
  } else if (ganhador == 2) {
    id = "perdeu";
    idMaquina = "ganhou";
    mensagemResultado = "Fail!";
  }

  // imprime os blocos de resultado sobre as cartas
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

//-------------------------------------------------------------------------
function atualizaPlacar() {
  var painelInfo = document.getElementById("info-center");
  var labelCentral = document.getElementById("center-label");
  var labelPartidas = document.getElementById("partidas");
  var cartasJogador = document.getElementById("cartas-jogador");
  var cartasMaquina = document.getElementById("cartas-maquina");
  var mensagemResultado = "Tied!";
  var id = "empatou";

  if (ganhador == 1) {
    id = "ganhou";
    mensagemResultado = "You Win!";
  } else if (ganhador == 2) {
    id = "perdeu";
    mensagemResultado = "Fail!";
  }

  // imprime as informações do painel central
  painelInfo.innerHTML = mensagemResultado;

  //exibe placar
  labelCentral.style.color = "#dcdcdc";
  labelCentral.innerHTML = placar[1] + " x " + placar[2];

  // exibe contagem de cartas e partida
  labelPartidas.innerHTML = "Match: " + partidas;
  cartasJogador.innerHTML = "Card: " + baralhoJogador.length;
  cartasMaquina.innerHTML = "Card: " + baralhoMaquina.length;
}

//-------------------------------------------------------------------------
// exibe mensagens quando um jogador fica com todas as cartas
function fimDeJogo() {
  var painelInfo = document.getElementById("info-center");
  var botao = document.getElementById("btnJogar");
  var mensagem;

  if (ganhador == 1) {
    mensagem = "Congratulations!<br><br>You Win<br><br> The Fight!";
  } else {
    mensagem = "You<br><br>Lost<br><br>The Fight!";
  }

  painelInfo.innerHTML = mensagem;
  botao.innerHTML = "Reiniciar Jogo";
  botao.setAttribute("onclick", "Restart()");
}

//-------------------------------------------------------------------------
// volta tudo ao ponto zero
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

  painelInfo.innerHTML = "Let's Fight! <br><br> Choose Your Side!";

  botao.innerHTML = "Press Start";
  botao.onclick = function () {
    iniciarJogo();
  };
}
