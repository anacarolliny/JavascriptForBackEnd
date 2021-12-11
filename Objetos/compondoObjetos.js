const Cliente = {
    nome: "Carol",
    idade: 26,
    cpf:"123456789",
    email:"carolteste@email.com",
    telefones: ["55557777", "88887777"] //varios telefones do cliente
}


Cliente.dependentes = {
    nome: "Ana",
    parentesco: "Mãe",
    dataNasc: "21/05/1968"
}


console.log(Cliente);


Cliente.dependentes.nome = "Ana Claudia"

console.log(Cliente);