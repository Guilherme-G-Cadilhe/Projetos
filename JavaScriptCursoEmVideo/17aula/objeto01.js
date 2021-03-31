let amigo = {
nome:'João', 
sexo:'M',
peso:60,
engordar(p=0){
  console.log('Engordou!')
  this.peso += p;
}};
console.log(amigo);
amigo.engordar(30);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);

