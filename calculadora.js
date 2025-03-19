
    export function soma(num1, num2){
        return num1 + num2
    }

    export function subtracao(num1, num2){
        return num1 - num2
    }

    export function divisao(num1, num2){
        return num1 / num2
    }

    export function multiplacacao(num1, num2){
        return num1 * num2
    }

    import moment from "moment";
 export function calcularIdade(anonascimento){
    const anoAtual=moment().year()
    
    return anoAtual - anonascimento
}

