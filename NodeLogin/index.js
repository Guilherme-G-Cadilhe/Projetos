const express = require("express");
const session = require("express-session"); // Autenticação de sessão

// Basicos
const port = process.env.PORT || 3000;
let path = require("path");
const app = express();

// Configurando a autenticação de sessão de log in
app.use(session({ secret: "teste" })); //Define uma chave para a sessão

// Habilitando HTMLS, CSS, etc
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

//Habilitando parsing das informações POST vindas no 'req.body' e json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Dados teste
const login = "admin";
const password = "123";

// Rotas de acesso na página
app.post("/", (req, res) => {
  if (req.body.username == login && req.body.password == password) {
    // Testa se é a conta 'salva'

    // Logado
    req.session.username = login; //Salva log in
    res.render("logado", { username: login }); //Passando o nome do usuario pra a página
  } else {
    res.render("index");
  }
  const data = req.body;
  console.log(data);
});
app.get("/", (req, res) => {
  //Página principal
  if (req.session.username) {
    //Se estiver logado
    res.render("logado", { username: login });
    console.log(` O meu usuario logado é ${req.session.username}`);
  } else {
    res.render("index");
  }
});

app.listen(port, () => {
  console.log(`Escutando na porta ${port} em localhost:${port}`);
});
