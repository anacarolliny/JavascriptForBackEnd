const Cliente = {
    nome: "Carol",
    idade: 26,
    cpf:"123456789",
    email:"carolteste@email.com",
    telefones: ["55557777", "88887777"] //varios telefones do cliente
}

Cliente.telefones.forEach(fone => console.log(fone))//valor da chave é array
