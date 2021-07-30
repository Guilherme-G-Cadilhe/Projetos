const LocalStrategy = require("passport-local").Strategy; // Autenticação com email e senha
const bcryptjs = require("bcryptjs");

// Recebe a biblioteca do passport para fazer as funções (1º parametro)
function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email); // (2 paramêtro) sendo uma função que recebe objeto usuario
    if (user == null) {
      // Se não existir o email
      return done(null, false, {
        message: "Usúario com esse email não encontrado!", // Mensagem chamada pelo express-flash
      });
    }

    try {
      //Compara senha
      if (await bcryptjs.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Senha incorreta" }); // Mensagem chamada pelo express-flash
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

module.exports = initialize;
