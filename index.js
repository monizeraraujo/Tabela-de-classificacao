var vinny = {
    nome: "Vinny",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  }
  
  var nize = {
    nome: "Nize",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0 
  }
  
  var gabriel ={
    nome:"Gabriel",
    vitorias: 1,
    empates: 5,
    derrotas: 2,
    pontos: 0,
  
  }
  var vivian ={
    nome: "Vivian",
    vitorias: 1,
    empates: 5,
    derrotas:2,
    pontos: 0
  }
  nize.pontos = calculaPontos(nize)
  vinny.pontos = calculaPontos(vinny)
  gabriel.pontos = calculaPontos(gabriel)
  vivian.pontos = calculaPontos(vivian)
  
  function calculaPontos (jogador){
    var pontos = ( jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  var jogadores = [nize, vinny, gabriel, vivian]
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela (jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
      html += "<tr><td>" + jogadores[i].nome+ "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      
       html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    }
    var tabelaJogadores = document.getElementById ("tabelaJogadores")
    tabelaJogadores.innerHTML=html
  }
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos (jogador)
    exibirJogadoresNaTela (jogadores)
    console.log("Clicou no botão Vitoria")
  }
  function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela (jogadores)
    console.log("Clicou no botão Empate")
  }
  function adicionarDerrota(i) {
    var jogador = jogadores [i]
    jogador.derrotas++
    jogador.pontos = calculaPontos (jogador)
    exibirJogadoresNaTela(jogadores)
    console.log("Clicou no botão Derrota")
  }
                                   
                               