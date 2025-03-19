import { subtracao, soma, divisao, multiplacacao, calcularIdade } from "./calculadora.js";

console.log("soma" , soma(10,5))
console.log("subtracao" , subtracao(10,5))
console.log("multiplicacao" , multiplacacao(10,5))
console.log("divisao" , divisao(10,5))




const anonascimento=1990
const idade=calcularIdade(anonascimento)


console.log(`Idade: ${idade} anos`)
