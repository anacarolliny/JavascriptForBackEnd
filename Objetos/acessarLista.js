const Cliente = {
    nome: "Carol",
    idade: 26,
    cpf:"123456789",
    email:"carolteste@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(Cliente[chaves[0]]); // anotação de colchetes para acessar de outro lugar
console.log(Cliente[chaves[1]]); // anotação de colchetes para acessar de outro lugar
console.log(Cliente[chaves[2]]); // anotação de colchetes para acessar de outro lugar
console.log(Cliente[chaves[3]]); // anotação de colchetes para acessar de outro lugar

chaves.forEach(info => console.log(Cliente[info])) // percorreu todo array

