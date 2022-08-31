const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//const fraseMinhaString = minhaString.trim()

//console.log(minhaString.trim())

console.log("A frase tem ", minhaString.length, " caracteres. Tirando os espaços em excesso, fica \'", minhaString.trim().length, " caracteres.")
// Não parece mudar a conta após tirar os espaços em excesso da frase


const minhaStringNova = minhaString.replaceAll("________", "\'sticioso\'")
console.log(minhaStringNova)