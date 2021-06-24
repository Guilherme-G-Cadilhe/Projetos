//const nomes = ["Eduardo", "Joana", "Maria"];
// String, Objetos , funções , Números
//const nomes = new Array("Eduardo", "Maria", "joao");
//nomes[2] = "joão";
// Valor por referencia
//
//const novo = nomes;
//novo.pop(); // Retira tb de nome pq estão ligados

//const novo = [...nomes];
//novo.pop() // Não retira mais, por que agora é uma copia dos valores

//const removido = nomes.pop(); // Remove do final do array original e recebe na variavel criada
//const removido = nomes.shift(); // Remove do inicio do array original e recebe na variavel criada

//nomes.push("joao"); // adiciona no final do array
//nomes.unshift("boyz"); // adiciona no inicio do array

//const nome = "Guilherme Guimarães Cadilhe";
//const nomes = nome.split(" "); // Separa pelo espaço

const nomes = ["Guilherme", "Guimarães", "cadilhe"];
const nome = nomes.join(" ");

console.log(nome);
