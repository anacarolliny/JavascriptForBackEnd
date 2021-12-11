const Alunos = ["Joao", "Juliana", "Caio", "Ana"]

const mediasDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [Alunos, mediasDosAlunos] 

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ", sua média é : " + listaDeNotasEAlunos[1][indice]
    } else{
        return "Aluno não encontrado"
    }
}

console.log(exibeNomeNota("Caio"));