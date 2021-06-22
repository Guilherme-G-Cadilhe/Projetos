const pessoa = {
  nome: "guilherme",
  idade: 20,
  sobrenome: "guimarães",
  endereco: {
    rua: "batha",
    numero: 69,
  },
};

const { nome, ...resto } = pessoa;
console.log(resto);

// // ... rest , spread

// const numeros = [10, 20, 30, 40, 90];
// const [priNum, ...resto] = numeros;
// console.log(resto);

// let a = "A"; // B
// let b = "B"; // C
// let c = "C"; // A

// const numeros = ["B", "C", "A"];

// [a, b, c] = numeros;

// console.log(a, b, c);
