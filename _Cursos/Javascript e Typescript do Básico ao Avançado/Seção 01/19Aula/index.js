/*
Primitivos - String, number, boolean, bigint, undefined,null,symbol.

Referência (mutável) - Array, Object, Function.
*/
let a = [1, 2, 3];
let b = [...a];
a.push(6);
console.log(a, b);
