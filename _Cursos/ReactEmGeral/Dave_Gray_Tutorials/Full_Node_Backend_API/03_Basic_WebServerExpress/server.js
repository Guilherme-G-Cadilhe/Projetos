const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3500

//        Regex pra rota ( começa e terminar com / ou ser index com .html opcional)
app.get('^/$|/index(.html)?', (req, res) => {
  //res.sendFile('./views/index.html', { root: __dirname }) //Envia arquivos como resposta
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
app.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

// Redirecionamento de Rotas
app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page.html') // 302 by default, redireciona pra outro arquivo no diretorio do arquivo anterior
})

// Route Handler em corrente simples
app.get('/hello(.html)?', (req, res, next) => {
  console.log("tentou rodar hello.html")
  next() // Chama a proxima função na corrente
}, (err, res) => {
  res.send('Hello World!')
});


// Chainning Rotas
const one = (req, res, next) => {
  console.log("one")
  next()
}
const two = (req, res, next) => {
  console.log("two"),
    next()
}
const three = (req, res, next) => {
  console.log("three"),
    res.send('Terminou')
}
app.get('/chain(.html)?', [one, two, three]);



// Rota padrão para qualquer uma que não for achada ( página de erro 404 )
app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html')) // Envia um arquivo 404 customizado
})

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))