//Temperatura

const prompt = require('prompt-sync')();

console.log('-'.repeat(40));
console.log(' >>>>>> CALCULO DE TEMPERATURA <<<<<< ');
console.log('-'.repeat(40));

while (true) {
    let temp = parseFloat(prompt('Temperatura Cº: '));

    // Definindo os valores para cada tipo de variável
    if (temp >= 34 && temp < 35.5) {
        console.log(`Temperatura de ${temp}Cº está com HIPOTERMIA.`);
        break;
    } else if (temp >= 35.6 && temp <= 37) {
        console.log(`Temperatura de ${temp}Cº está NORMAL.`);
        break;
    } else if (temp >= 37.1 && temp <= 37.9) {
        console.log(`Temperatura de ${temp}Cº está com ESTADO FEBRIL.`);
        break;
    } else if (temp >= 38 && temp <= 39.4) {
        console.log(`Temperatura de ${temp}Cº está com FEBRE.`);
        break;
    } else if (temp >= 39.5 && temp <= 42.4) {
        console.log(`Temperatura de ${temp}Cº está com FEBRE ALTA.`);
        break;
    } else {
        console.log('ERRO! Digite uma temperatura válida.');
    }

    let resp = '';
    while (resp !== 'S' && resp !== 'N') {
        resp = prompt('Quer Continuar? [S/N]: ').trim().toUpperCase();
    }
    if (resp === 'N') {
        break;
    }
}
