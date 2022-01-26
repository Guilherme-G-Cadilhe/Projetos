// ---- Chaves Secretas do ambiente ----
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----- Inicial ---------
const express = require("express");
const app = express();
const bcryptjs = require("bcryptjs"); // Biblioteca para criptografar senhas
const passport = require("passport"); // Biblioteca para autenticar dados
const flash = require("express-flash"); // Biblioteca para mostrar mensagens
const session = require("express-session"); // Biblioteca para armazenar sessão no navegador
const methodOverride = require("method-override"); // Biblioteca que Sobrescreve metodos

//
// ---- Funções do passport ( Autenticação )
const initializePassaport = require("./passportConfig");

//
//Passa a biblioteca do passport para a função criada no outro modulo
initializePassaport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

//
// -------- Habilitar e outras configurações ----------
app.set("view-engine", "ejs"); // Habilita ejs
app.use(express.urlencoded({ extended: true })); // Habilita req.body
app.use(flash()); // Habilita utilização de mensagens integradas
app.use(
  session({
    secret: "process.env.SESSION_SECRET", // criar um .env com o SESSION_SECRET=algumacoisa
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method")); //O Action que tiver especificado o _method,pode ser modificado pra
//qualquer outro metodo customizado ( delete nesse caso)

// ----- Váriaveis pra armazenar informações
const port = 3000;
const users = [];

// ------ Ações para página inicial ---------
app.get("/", checkAuthenticated, (req, res) => {
  res.render("index.ejs", { name: req.user.name });
});

// ------ Ações para a página de login --------
app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    // Estrategia local e lista de opções
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true, // Mensagem que é definida em caso de erro no passportConfig.js
  })
);

// ---- Ações para a página de registro --------
app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});
app.post("/register", checkNotAuthenticated, async (req, res) => {
  // Envio do formulario
  try {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10); //Criptografa senha
    users.push({
      // Salva a conta no array
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
  console.log(users);
});

//
// ---- Funções de funcionalidade e checagem de página e login/logout-----

app.delete("/logout", (req, res) => {
  req.logOut(); //Função do passport que limpa a sessão e desloga o usúario
  res.redirect("/login"); //Volta para login
});

function checkAuthenticated(req, res, next) {
  //Checa se ta logado
  if (req.isAuthenticated()) {
    //Função do passport para verficar autentificação
    // Se estiver autenticado, continua o get
    return next();
  }
  res.redirect("/login"); // Se não tiver, retorna para página de login
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

//
// ---- Rodar o server -----
app.listen(port, () => {
  console.log(`Server ligado em localhost:${port}`);
});
