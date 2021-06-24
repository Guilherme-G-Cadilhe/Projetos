function maior(n1, n2) {
  let resultado = n1 > n2 ? n1 : n2;
  return resultado;
}

const maior2 = (x, y) => (x > y ? x : y);

console.log(maior2(30, 50));
