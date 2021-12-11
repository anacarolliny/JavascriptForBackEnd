const Alunos = ["Joao", "Juliana", "Caio", "Ana"]

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [Alunos, mediasDosAlunos] 
//Aqui é criado um array de duas dimensões

console.log(`${listaDeNotasEAlunos[0][0]}, a sua media é ${listaDeNotasEAlunos[1][0]}`);
//Aqui o primeiro 0 representa o Alunos dentro de listaDeNotasEAlunos e o segundo 0 representa o nome Joao do array Joao
//Assim mesmo funciona depois no 1, que representa o array das medias e depois o 0 representa a nota 10 do array mediaDosAlunos
