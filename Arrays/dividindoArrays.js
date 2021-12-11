const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

/*
.slice -> ele separa o array, ele precisa receber dois valores, onde ele inivia e onde ele termina, referente ao index do array */
 const sala1 = nomes.slice(0,nomes.length/2) // aqui ele entende que o .lenght ele pega o tamanho total do array e procura a posição da metade pelo /2
 const sala2 = nomes.slice(nomes.length/2)

 console.log("tamanho do array : " , nomes.length);
 console.log(`Alunos da Sala 1: ${sala1}`);
 console.log(`Alunos da Sala 2: ${sala2}`);
