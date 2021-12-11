const notas = [10,9,8,7,6]

const notasAtualizadas = notas.map( nota =>  nota == 10 ? nota : ++nota) // atenção na ordem dos comandos

console.log(notasAtualizadas);


/*diferença do forEach e Map : o forEach não retorna nada, ele executa o que esta dentro do bloco
porém ele nao retorna nada, mas o Map ja retornou neste caso com um novo array, nesse caso um array de notasAtualizadas
*/

