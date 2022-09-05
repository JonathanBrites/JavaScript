//Uso do FOR IN

let person = {
    name:'Jonathan',
    age:30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}

//Uso do FOR OF

let nome = 'Jonathn'
let nomes = ['Jonathan', 'Chayene', 'Alice']

for(let nome of nomes){
    console.log(nome)
}

//Uso do WHILE

let i = 0
while(i < 10){
    console.log(i)

    i++;
}

//Uso do FOR

for(let b = 1; b <= 10; b++){
    if(b === 5){
        continue;
    }
    console.log(b)
}