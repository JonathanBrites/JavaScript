// 1. For
// 2. While
// 3. Do..while
// 4. For..in
// 5. For..of

// 1. For

for(let i = 0;i <= 5;i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// 2. While

let i = 5;

while (i >= 1){
    if(i% 2 !== 0){
        console.log(i);
    }
    i--;
}

// 3. Do..While

let dw= 0;
do {
    console.log('Digitando!');
    dw++;
}while (dw < 10)

// 4. For in

const pessoa = {
    nome: 'Jonathan',
    idade: 25
};
//key-value
for(let chave in pessoa){
    console.log(chave, pessoa.nome, pessoa.idade);
}

//exemplo de como acessar um array

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let indice in cores){
    console.log(indice,cores[indice])
}

//for-of
for(let cor of cores){
    console.log(cor);
}