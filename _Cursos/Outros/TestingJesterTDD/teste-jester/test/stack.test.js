class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  push(valor) {
    this.top += 1;
    this.items[this.top] = valor;
  }
  pop() {
    this.top - 1;
    this.items[this.top] = undefined;
  }
}

describe("Meu teste", function () {
  let stack;
  beforeEach(function () {
    stack = new Stack();
  });

  test("É criado vazio", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  test("Pode empurrar itens para o topo", () => {
    stack.push("JOKER");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("JOKER");
  });
  test("Pode retirar itens do topo", () => {
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(undefined);
  });
});

// test/it("NomeDoTeste") -
// test.todo("NomeDoTeste") - o TODO faz o teste passar, ficando como um "A ser feito"
// expect(ValidaçãoASerTestada) - Define o que vai ser testado
// .toBe(Resultado) - Define o que você espera q seja o resultado do tipo
// .toEqual(Resultado) - Define o que você espera do valor
// beforeEach(função) - Define o que vai ser executado no começo de cada teste
