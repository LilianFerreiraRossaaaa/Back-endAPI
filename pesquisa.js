const chalk = require('chalk');
const inquirer = require('inquirer');

//função principal que executa 

function main(){
    console.log("Olá")
    console.log(chalk.bgRed.white('Bem vindo ao questionário!'));

    //perguntar ao usuario seu nome

        inquirer.prompt({
            name: 'name',
            message: 'Qual é o seu nome?'
        })
        //Promise = JavaScript
        .then ((nomeResponder) => {
            //Peguntar idade do usuario
            return inquirer.prompt({
                name: 'age',
                message:'Quantos anos você tem?'
            })
            .then((idadeResonder) => {
                //imprimir a mensagem na tela
                console.log(chalk.bgYellow.black(`Olá ${nomeResponder.name}! Você tem ${idadeResonder.age} anos!`))
            })
        })
}

main();