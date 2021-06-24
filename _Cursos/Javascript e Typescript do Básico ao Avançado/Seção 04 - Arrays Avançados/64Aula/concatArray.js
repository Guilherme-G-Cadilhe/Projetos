const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [...a1, 'bob', ...a2, ...[5, 6]];

console.log(a3);
