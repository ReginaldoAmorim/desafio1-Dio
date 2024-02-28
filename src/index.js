//váriavel com nome do herói
let nomeHeroi = "Felipotes";

//váriavel com xp atual do héroi
let xpHeroi = 20000;

//estrutura condicional If-else mostrando o rank do seu herói
if (xpHeroi <= 1000) {
    console.log("O nível do seu herói é ferro!");
} else if (xpHeroi <= 2000) {
    console.log("O nível do seu herói é bronze!");
} else if (xpHeroi <= 5000) {
    console.log("O nível do seu herói é prata!");
} else if (xpHeroi <= 8000) {
    console.log("O nível do seu herói é platina!");
} else if (xpHeroi <= 9000) {
    console.log("O nível do seu herói é ascendente!");
} else if (xpHeroi <= 10000) {
    console.log("O nível do seu herói é imortal!");
} else {
//estrutura de repetição do-while
    do {
        console.log("O nível do seu herói é radiante!");
//acrescentei +=1 para não ser um looping eterno
        xpHeroi += 1;
    } while (xpHeroi <= 20000);
//mensagem final exibindo os pontos de xp atuais do herói
}
console.log("O herói " + nomeHeroi + " está com: " + xpHeroi + " pontos de xp!!");