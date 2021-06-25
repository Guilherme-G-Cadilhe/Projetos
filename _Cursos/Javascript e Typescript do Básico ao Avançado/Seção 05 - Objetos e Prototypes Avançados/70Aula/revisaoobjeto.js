const pessoa = {
  nome: 'Guilherme',
  sobrenome: 'Guimarães',
};

const p1 = pessoa;
Object.freeze(VáriavelObjeto);
p1.nome = 'ja';
console.log(p1);
