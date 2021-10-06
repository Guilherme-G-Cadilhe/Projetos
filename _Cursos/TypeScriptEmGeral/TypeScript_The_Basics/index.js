console.log('Olá Mundo!');
// const person1: Person = {
//   first: "jeff",
//   last: "Delaney"
// }
// const person2: Person = {
//   first: "Usain",
//   last: "Bolt",
//   fast: true
// }
// ---------- FUNÇÕES -------------
function power(x, y) {
    return Math.pow(x, y).toString();
}
power(5, 10);
const array = [];
array.push(1);
array.push('23');
array.push(false);
// -------- GENERICOS --------
// Para quando quiser utilizar tipos internamente de uma classe
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
export {};
