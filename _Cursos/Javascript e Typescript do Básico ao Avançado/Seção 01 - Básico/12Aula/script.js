let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let outro = varA;


varA = varB;
varB = varC;
varC = outro;

console.log(varA +varB +varC)