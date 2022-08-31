//Crie a const para a frase aqui

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(`${frase}

${novaFrase}

A frase nova possui a cor "verde"? ${novaFrase.includes("verde")}
A nova frase possui a cor "laranja"? ${novaFrase.includes("laranja")} `)