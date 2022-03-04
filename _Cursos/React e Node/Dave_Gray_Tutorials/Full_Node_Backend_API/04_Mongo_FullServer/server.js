const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const path = require('path');

const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler')
const verifyJWT = require('./middleware/verifyJWT');
const credentials = require('./middleware/credentials')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3500


//---------------------- MIDDLEWARES --------------------------
// Middleware Logger Customizado ( criado no logEvents)
app.use(logger);


// Gerencia opções de checagem de credenciais - antes do CORS!
// e obrigatorio para conseguir utilizar no 'credentials:true' no FETCH
app.use(credentials)

// Cors com opções customizadas de dominios
app.use(cors(corsOptions));


// Middleware nativo para manipular 'urlenconded data'
// em outras palavras: data de formulario: 'content-type: application/x.www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

// Middleware nativo para JSON
app.use(express.json());

//Middlware para Cookies
app.use(cookieParser())

// Serve Arquivos Estaticos (static files), caminho padrão é '/'
app.use(express.static(path.join(__dirname, '/public')));


// Rotas
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/api/register'));
app.use('/auth', require('./routes/api/auth'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/logout', require('./routes/api/logout'));


app.use(verifyJWT);//Todas rotas abaixo daqui vão validar o JWT no começo, sempre.
app.use('/employees', require('./routes/api/employees'));


// Rota padrão para qualquer uma que não for achada ( página de erro 404 )
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html')) // Envia um arquivo 404 customizado
  } else
    if (req.accepts('json')) {
      res.json({ error: '404 Not Found' })
    } else {
      res.type('txt').send('404 Not Found')
    }
})


//------------------- ERROR HANDLER CUSTOMIZADO ---------------------
app.use(errorHandler)

// --------------------------- LIGANDO O SERVIDOR ---------------------------

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))