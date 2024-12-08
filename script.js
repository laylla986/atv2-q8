let maiordeidade = 0;

for (let i = 1; i <= 20; i++) {

    let idade = ('Digite a idade da ' + i + ' pessoa:'));
    if (idade >= 18) {
        maiordeidade++;
    }
}
alert('O numero de pessoas que são maiores de idade é: ' + maiordeidade);
