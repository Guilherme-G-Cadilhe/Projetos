const fizzBuzz = (n) => {
  if (Number.isInteger(n)) {
    if (n % 3 === 0 && n % 5 === 0) {
      return "FizzBuzz";
    } else if (n % 5 === 0) {
      return "Buzz";
    } else if (n % 3 === 0) {
      return "Fizz";
    } else {
      return n;
    }
  } else {
    return "Não é um número!";
  }
};
console.log("Teste", fizzBuzz("a"));

for (let i = 100; i >= 1; i--) {
  console.log(fizzBuzz(i));
}
