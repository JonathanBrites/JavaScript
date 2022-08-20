//function
let corSite = "azul";
function resetaCor(cor){
    corSite = cor;
};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

let time = "Fluminense";
function trocaTime(futebol){
    time = futebol;
};

console.log(time);
trocaTime("Flamengo");
console.log(time);

//Tipos de Função
// Realiza uma tarefa, que não devolve nada

function dizerNome(){
    console.log('Jonathan');
}

dizerNome();


//Faz um calculo e retorna resultado
function multiplicarPorDois(valor){
    return valor* 2;

}

console.log(multiplicarPorDois(5));

