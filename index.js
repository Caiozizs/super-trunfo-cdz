var carta1 = {
    nome: "Mu de Áries",
    imagem:
      "http://pm1.narvii.com/6400/ea865a7becbff8859d0825e5d088c58818ad1414_00.jpg",
    atributos: {
      ataque: 94,
      defesa: 100,
      magia: 100
    }
  };
  
  var carta2 = {
    nome: "Aiolia de Leão",
    imagem:
      "https://pm1.narvii.com/6396/ae5fc4ae493d8899858f1b0d8724a95a1e3e7196_hq.jpg",
    atributos: {
      ataque: 95,
      defesa: 27,
      magia: 45
    }
  };
  
  var carta3 = {
    nome: "Shaka de Virgem",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_975022-MLB32021843034_082019-O.jpg",
    atributos: {
      ataque: 72,
      defesa: 95,
      magia: 100
    }
  };
  var carta4 = {
    nome: "Shura de Capricórnio",
    imagem:
      "http://pm1.narvii.com/6470/8a2f1f00631a68b5ff56c154d4703e4934792d4d_00.jpg",
    atributos: {
      ataque: 90,
      defesa: 95,
      magia: 100
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 4);
    }
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p";
    } else {
      htmlResultado = "<p class='resultado-final'>Empate</p>";
    }
    divResultado.innerHTML = htmlResultado;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] / 10 +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] / 10 +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  