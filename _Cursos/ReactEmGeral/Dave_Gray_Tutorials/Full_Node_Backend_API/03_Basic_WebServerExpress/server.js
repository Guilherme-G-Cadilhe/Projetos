const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const path = require('path');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500


//---------------------- MIDDLEWARES --------------------------
// Middleware Logger Customizado ( criado no logEvents)
app.use(logger);
// Cors com opções customizadas de dominios
app.use(cors(corsOptions));


// Middleware nativo para manipular 'urlenconded data'
// em outras palavras: data de formulario: 'content-type: application/x.www-form-urlencoded'
app.use(express.urlencoded({ extended: false }))

// Middleware nativo para JSON
app.use(express.json())

// Serve Arquivos Estaticos (static files), caminho padrão é '/'
app.use(express.static(path.join(__dirname, '/public')))


// Envia toda raiz do '/' para essas rotas no root
app.use('/', require('./routes/root'))
app.use('/employees', require('./routes/api/employees'))



// // Envia todos os caminhos pro subdiretorio('/subdir), pra dentro do routes de lá
// app.use('/subdir', express.static(path.join(__dirname, '/public')))
// app.use('/subdir', require('./routes/subdir'))


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