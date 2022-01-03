// ------Tipos simples, Tipos em Objetos e Interfaces-----------

let hello: string;

const getFullName = (nome: String, sobrenome: String): String => {
  return hello + ` ${nome} ${sobrenome}`;
};
console.log(getFullName("Guilherme", "Cadilhe"));

const user: { name: String; age: Number } = {
  name: "Bob",
  age: 21,
};
interface User2Interface {
  name: String;
  age?: Number;
  getMessage(): String;
}
const user2: User2Interface = {
  name: "jack",
  getMessage() {
    return "Olaa";
  },
};
// ---------Unions ( OU ), Type Aliases (Tipos proprios)------------------------

type ID = String;
type PopularTag = String;
type MaybePopularTag = PopularTag | null;

interface IUser {
  id: ID;
  name: String;
  surname: String;
}
const popularTags: PopularTag[] = ["Dragão", "Cafe"];
const dragonsTag: MaybePopularTag = "Dragão verde";

let username: String = "gui";
let pageName: String | Number = "1";
let errorMessage: String | null = null;
let user3: IUser | null = null;

// ---------Any, Never, Void e Conversão de Tipos ( as )------------------------

const doSomething = (): void => {
  console.log("Sem retorno ( return )");
};

let foo: any = "Qualquer coisa";

const neverType = (): never => {
  throw "nunca será lido, ou funcionará";
};

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: String = vAny;
//let s2 :String = vUnknown //não pode ser atribuido ao tipo string por que ele foi declarado number antes
let s2: String = vUnknown as String; //Converte para string

let pageNumber: String = "1";
let numericPageNumber: Number = pageNumber as unknown as number;
