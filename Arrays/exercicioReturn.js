let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
           
        }
        return e
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))



/* Verificar que 
É necessário incluir a instrução 'return' e' após o for para exibir as listas no console.*/