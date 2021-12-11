//vamos inserir no ultimo elemento do array uma nova nota, na ultima posição
const notas = [10, 6, 8]
console.log(`Essas são as notas antes de adicionar a ultima nota: ${notas}`)
notas.push(7)
console.log(notas)


let media = (notas[0] + notas[1] +notas[2] +notas[3] )/notas.length

console.log(media);