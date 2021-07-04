// 705.404.450-52   070.987.720-03
/*

705.404.450 Multiplica por sequencia regressiva
-52 é o resultado que queremos chegar para validar

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o digito for maior q 9 = 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10 = 284

11 - (284 % 11) = 2 (Segundo digito)
Se o digito for maior q 9 = 0

concatenar os digitos resultantes com os números originais e comparar com o original
705.404.450-52 === 705.404.450
*/

function ValidaCPF(cpf) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digitoUm = this.criaDigito(cpfParcial);
  const digitoDois = this.criaDigito(cpfParcial + digitoUm);

  const novoCpf = cpfParcial + digitoUm + digitoDois;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.404.450-52');

if (cpf.valida()) {
  console.log('Cpf valido');
} else {
  console.log('Cpf invalido');
}
