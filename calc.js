const chalk = require('chalk');
const { request } = require('express');
const inquirer = require('inquirer');

// função para somar dois números
function somarNumeros(num1,num2){
    return num1 + num2;
}

// função para dividir dois números
function dividirNumeros(num1,num2){
    return num1 / num2;
}

// função para mutiplicar dois números
function mutiplicarNumeros(num1,num2){
    return num1 * num2;
}

// função para subtrair dois números
function subtrairNumeros(num1,num2){
    return num1 - num2;
}

function main(){
    console.log(chalk.bgRed.white('Olá, seja ben-vindo'));

    // Perguntar ao usuario dois números
    inquirer.prompt([
        {
            name:'numero1',
            message:'Digite o primeiro número:'
        },
        {
            name:'numero2',
            message:'Digite o segundo número:'
        }
    ])

    // Promise = Javascript
    .then((resposta) => {
        //Converter os números para valores númericos
        const numero1 = Number(resposta.numero1);
        const numero2 = Number(resposta.numero2);

        //calcular soma

        const resultado = somarNumeros(numero1, numero2);

        //calcular divisão

        const resultado2 = dividirNumeros(numero1, numero2);

        //calcular divisão

        const resultado3 = mutiplicarNumeros(numero1, numero2);

        //calcular divisão

        const resultado4 = subtrairNumeros(numero1, numero2);

        // Imprimir
        console.log(chalk.bgRed.green(`A soma de ${numero1} e ${numero2} é ${resultado}`));

        // Imprimir2
        console.log(chalk.bgYellow.green(`A divisão de ${numero1} e ${numero2} é ${resultado2}`));

        // Imprimir3
        console.log(chalk.bgGreen.green(`A mutiplicação de ${numero1} e ${numero2} é ${resultado3}`));

        // Imprimir4
        console.log(chalk.bgBlue.green(`A subração de ${numero1} e ${numero2} é ${resultado4}`));

    })
}

main();