//Superclass ou Classe mãe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.verSaldo();
    console.log(`Tentou sacar: ${valor} | Saldo insuficiente!`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(`Agência:${this.agencia} | Conta:${this.conta}\nSaldo:${this.saldo.toFixed(2)}`);
};

//const conta1 = new Conta(11, 22, 100);
//conta1.depositar(200);
//conta1.sacar(400);

//Cria conta corrente com herança
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    this.verSaldo();
    console.log(`Tentou sacar: ${valor} | Limite: ${this.limite}\nSaldo insuficiente!`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
//contaCorrente1.depositar(10);
//contaCorrente1.sacar(120);
//console.log(contaCorrente1);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca1 = new ContaPoupanca(12, 33, 0);

contaPoupanca1.depositar(10);
contaPoupanca1.sacar(10);
