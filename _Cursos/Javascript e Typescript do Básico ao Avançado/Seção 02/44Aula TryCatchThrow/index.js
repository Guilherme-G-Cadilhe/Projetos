function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X e Y precisam ser números!.");
  }
  return x + y;
}
console.log(soma(1, 2));
console.log(soma(1, "2"));
