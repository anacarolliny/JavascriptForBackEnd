// declaração de função

function minhaFuncao(param) {
    // bloco de código
  }
  
  minhaFuncao("param")
  
  // expressão de função
  
  const soma = function(num1, num2) { return num1 + num2 }
  console.log(soma(1, 1))
  
  // // diferença principal: HOISTING
  // // funções e var são "listadas" no topo do arquivo.
  // //Importante lembrar que o código em javascript sempre ira rodar de cima pra baixo e fazer uma varredura de todas as variaveis 
  // e de todas as funções conseguindo ler entao uma chamada antes mesmo da funcao, mas em relacao a const ela precisa ser 
  // inicializada para ser lida e assim chamada
  
  console.log(apresentar())
  
  function apresentar() {
    return "olá";
  }
  
  console.log(somaOutroExemplo(1, 1))
  const somaOutroExemplo = function(num1, num2) { return num1 + num2 }