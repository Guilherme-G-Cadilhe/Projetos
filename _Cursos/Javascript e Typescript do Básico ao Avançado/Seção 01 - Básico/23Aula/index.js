/*
&& ->  False && true -> false( o proprio valor)

--FALSY--
false
0
''  ""  ``
null / undefined
NaN
*/

const corUsuario = "vermelho";
const corPadrão = "preto" || corUsuario;

console.log(corPadrão);
