//if else

// Se a hora estiver entre 06:00 até 12:00 exiba Bom Dia!
// Se estiver entre 12:00 as 18:00 exiba Boa tarde
// Caso contrário Boa noite

let hora = 22;


if (hora > 6 && hora < 12){
    //codigo a ser executado
    console.log("Bom dia!")
}
else if (hora > 12 && hora < 18){
    //codigo a ser executado
    console.log("Boa tarde!")
}
else{
    //codigo a ser executado
    console.log("Boa noite!")
}