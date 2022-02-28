
// Depois que sair do desenvolvimento, remover tb as URLS de desenvolvimento
const whitelistdomains = [
  'https://www.yoursite.com.br',
  'https://www.google.com.br',
  'http://127.0.0.1:5500',
  'http://localhost:3500']

//Filtro de dominios permitidos
const corsOptions = {
  origin: (origin, callback) => {
    //               '|| !origin' é só pra desenvolvimento, pra permitir o npm run dev
    if (whitelistdomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Não permitido pelo CORS'));
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions