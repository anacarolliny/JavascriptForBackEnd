// let x = "";
// console.log(x);
// x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
                      function imprimeTexto(texto) {
                        console.log(texto)
                      }
                      
                      // 2) executa a função (1 ou + vezes)
                      
                      imprimeTexto(soma());
                      // imprimeTexto("outro texto");
                      
                      // três formas de escrever funções
                      
                      function soma(){
                        //outros códigos
                        //vários console.log()
                        return 2 + 2;
                      }
                      
                      // console.log(soma())


                    
/*Modelos de functions erradas

function soma(){
    const resultado = 2 + 2
}

console.log(soma())

Aqui ele não imprime nada porque eu não pedi pra retornar nada dentro da propria função, então ela é chamada mas
nao entrega nada porque faltou esta logica e quando chega no meu terminal ela só mostra o undefined no resultado da linha 36
OBS : NAO É PROIBIDO ESCREVER COISAS DEPOIS DO RETORNO, MAS ELAS NÃO SERAM EXECUTADAS


*/