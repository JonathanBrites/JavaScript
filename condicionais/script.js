//throw = Disparar/Lançar

function sayMyName(name=''){
    if(name ===''){
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

//Try = Tentar
try{
    sayMyName()
} catch(e){
    console.log(e)
}
//Catch = capturar

///////

//switch

let expression = 'a'

switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}


////////////

//if else

let temperature = 36.5


if(temperature >= 37.5){
    console.log('Febre')
} else if(temperature < 37.5 && temperature >= 37){
    console.log('Febre moderada')
}else{
    console.log('Saudavel')
}


