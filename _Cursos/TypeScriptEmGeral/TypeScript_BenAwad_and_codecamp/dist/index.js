"use strict";
// ------Tipos simples, Tipos em Objetos e Interfaces-----------
let hello;
const getFullName = (nome, sobrenome) => {
    return hello + ` ${nome} ${sobrenome}`;
};
console.log(getFullName("Guilherme", "Cadilhe"));
const user = {
    name: "Bob",
    age: 21,
};
const user2 = {
    name: "jack",
    getMessage() {
        return "Olaa";
    },
};
const popularTags = ["Dragão", "Cafe"];
const dragonsTag = "Dragão verde";
let username = "gui";
let pageName = "1";
let errorMessage = null;
let user3 = null;
// ---------Any, Never, Void e Conversão de Tipos ( as )------------------------
const doSomething = () => {
    console.log("Sem retorno ( return )");
};
let foo = "Qualquer coisa";
const neverType = () => {
    throw "nunca será lido, ou funcionará";
};
let vAny = 10;
let vUnknown = 10;
let s1 = vAny;
//let s2 :String = vUnknown //não pode ser atribuido ao tipo string por que ele foi declarado number antes
let s2 = vUnknown; //Converte para string
let pageNumber = "1";
let numericPageNumber = pageNumber;
