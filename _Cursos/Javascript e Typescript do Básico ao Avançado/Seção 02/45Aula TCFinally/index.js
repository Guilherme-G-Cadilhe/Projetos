function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

try {
  const data = new Date("21-06-2000 20:24:11");
  const hora = retornaHora();
  console.log(hora);
} catch (error) {
  // Tratar erro
} finally {
  console.log("Tenha um bom dia");
}

// try {
//   // É executada quando não há erros
// } catch (e) {
//   // É executada quando há erros
// } finally {
//   // Sempre é executada
// }
