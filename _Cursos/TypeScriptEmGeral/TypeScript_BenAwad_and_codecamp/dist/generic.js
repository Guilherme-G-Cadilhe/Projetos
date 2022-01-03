"use strict";
const addId = (obj) => {
    const id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
const usuario = {
    name: "jack",
    data: {
        meta: "teste",
    },
    meta: "P",
};
const usuario2 = {
    name: "John",
    data: ["foo", "bar"],
    meta: 123,
};
const result = addId(usuario);
console.log(result);
