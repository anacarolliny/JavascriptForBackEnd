const Cliente = {
    nome: "Carol",
    idade: 26,
    cpf:"123456789",
    email:"carolteste@email.com"
}


console.log(Cliente.nome); //notação de ponto o uso do ponto pra acessar o valor deste objeto
console.log(`Nome do cliente é ${Cliente.nome}, sua idade é ${Cliente.idade} e seu email : ${Cliente.email}`);

console.log(`Os tres primeiro numeros do CPF : ${Cliente.cpf.substring(0,3)}`)