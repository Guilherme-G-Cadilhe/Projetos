const nome = 'Guilherme Guimarães';
const sobrenome = 'Cadilhe';
const idade = 20;
const peso = 55;
const alturaEmM = 1.79;
let imc; // Peso / ( altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2020 - idade;


console.log(`${nome} ${sobrenome} de ${idade} anos de idade, pesa ${peso} Kgs e mede ${alturaEmM}M \n
Seu IMC é `,imc.toFixed(1) , `\n 
E nasceu em`, anoNascimento);




