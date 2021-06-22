// * significa função geradora
function* geradora1() {
  //Código qualquer..
  yield "valor 1";
  //Código qualquer..
  yield "valor 2";
  //Código qualquer..
  yield "valor 3";
}
const g1 = geradora1();

function* geradora2() {
  yield 0;
  yield 1;
  yield 2;
}
function* geradora3() {
  yield* geradora2();
  yield 3;
  yield 4;
  yield 5;
}
const g3 = geradora3();

function* geradora4() {
  yield function () {
    console.log("Sou o Yield 1");
  };
  //.....Códigos
  yield function () {
    console.log("Sou o Yield 2");
  };
}
const g4 = geradora4();
const func1 = g4.next().value;
func1();
