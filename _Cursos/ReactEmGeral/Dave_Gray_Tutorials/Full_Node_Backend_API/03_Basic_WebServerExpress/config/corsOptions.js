const allowedOrigins = require('./allowedOrigins')


//Filtro de dominios permitidos
const corsOptions = {
  origin: (origin, callback) => {
    //               '|| !origin' é só pra desenvolvimento, pra permitir o npm run dev
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error(`Dominio: ${origin}. Não permitido pela Lista Privada do CORS`));
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions