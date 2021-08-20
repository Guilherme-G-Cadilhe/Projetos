const pessoas = [
  { id: 3, nome: "guilherme" },
  { id: 2, nome: "bobnini" },
  { id: 1, nome: "guilhenini" },
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}
// console.log(novasPessoas.get(2));
novasPessoas.delete(2);
console.log(novasPessoas);
// for (const pessoas of novasPessoas.values()) {
//   console.log(pessoas);
// }

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }
