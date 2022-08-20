// Operadores Aritimeticos(matemáticos)
// Operadores de Atribuição
// Operadores de Comparação
// Operados Lógicos
// Operadores Bitwise

//Operadores Aritimeticos

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

// incremento

let idade = 18;
console.log(idade++);
console.log(idade);

//Operadores de Atribuição

let valorTeclado = 100;
valorTeclado += valorTeclado; 
console.log(valorTeclado);

//Operadores de Igualdade
// igualdade estrita
console.log(1 === 1);
// igualdade solta
console.log( 1 == 1);


//Operador Ternario
//Exemplo, um cliente com +100 pontos = Premiun, menos do que 100 pontos é comum

let pontos = 100; // Linha abaixo aonde está premium é true, e aonde está comum é false
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)

//Operadores Lógicos
// Operador lógico e é representado por (&&)
// Retorna True se os dois operandos forem true

console.log(true && true);
//retorna true

console.log(true && false);
//retorna false

//exemplo pratico
let maiorDeIdade = true;
let possuiCTPS = true;
let podeAplicar = maiorDeIdade && possuiCTPS;

console.log(podeAplicar);

//Operador lógico ou é representado por (||)
//Retorna true se um dos operandos forem true

//exemplo pratico
let maiorIdade = false;
let possuiCarteira = true;
let podeAceitar = maiorIdade || possuiCarteira;

console.log(podeAceitar);

//Operador lógico NOT é representado por !
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado',candidatoRecusado);
