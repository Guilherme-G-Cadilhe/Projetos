const addId = <G extends object>(obj: G) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface IUsuario<T, V> {
  name: String;
  data: T;
  meta: V;
}

const usuario: IUsuario<{ meta: String }, String> = {
  name: "jack",
  data: {
    meta: "teste",
  },
  meta: "P",
};

const usuario2: IUsuario<String[], number> = {
  name: "John",
  data: ["foo", "bar"],
  meta: 123,
};

const result = addId(usuario);
console.log(result);
