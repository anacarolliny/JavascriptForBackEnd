const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

//é indicado para condições simples, validações com muitos if's não é aconselhado o uso para a futura leitura e manuntenção
//Nome é ternario por ter tres operadores em uma linha
