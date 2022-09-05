//Manipulando Arrays

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodeJs")

//adicionar no começo
techs.unshift("SQL")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))

//remover 1 ou mais items em qualquer posição do array
//techs.splice(1)

//encontrar a posição de um elemnto no array
let index = techs.indexOf('css')
techs.splice(index,1)

console.log(techs)

//Transformar uma cadeira de caracteres em elementos de um array

let word="manipulação"
console.log(Array.from(word))

//Contar elementos de um array
console.log(["a", "b", "c"].length)

//Criar array com construtor

//let myArray = new Array['a', 'b', 'c']
//console.log(myArray)

//Separar um texto que contem espacos, em novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra especifica

let verificarTexto = "Eu quero viver"
console.log(verificarTexto.includes("amor"))

//Transforme letras minusculas em maiusculas

let transformeTexto = "Programar é muito bacana"
console.log(transformeTexto.toLowerCase().toUpperCase())

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number = 456247.8555444
console.log(number.toFixed(2).replace(".", ","))

//Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let quantidadeCD = "paralelepipedo"
console.log(quantidadeCD.length)
let numberdigitos = 1234
console.log(String(numberdigitos).length)

//Transformar String em número e número em string

let string = "123"
console.log(Number(string))
let num = 321
console.log(String(num))

//