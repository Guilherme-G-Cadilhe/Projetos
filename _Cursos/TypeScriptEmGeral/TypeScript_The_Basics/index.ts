import * as _ from 'lodash';

console.log('Olá Mundo!');

//////------------- CRIANDO PROPRIO TIPO --------------
// //type Style = string;
// type Style = "bold" | "italic"; // Só permite esses dois valores

// let font: Style;

//// ---------- OBJETOS --------------
interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

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
function power(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

power(5, 10);

//// --------- ARRAYS -----------

// const array:number[] = []
type myList = [number?, string?, boolean?];

const array: myList = [];

array.push(1);
array.push('23');
array.push(false);

// -------- GENERICOS --------
// Para quando quiser utilizar tipos internamente de uma classe

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);
