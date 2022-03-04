// Envia todos os caminhos pro subdiretorio('/subdir), pra dentro do routes de lá
app.use('/subdir', express.static(path.join(__dirname, '/public')))
app.use('/subdir', require('./routes/subdir'))



router.get('/new-page(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})
router.get('/old-page(.html)?', (req, res) => {
  // Redirecionamento de Rotas
  res.redirect(301, '/new-page.html') // 302 by default, redireciona pra outro arquivo no diretorio do arquivo anterior
})


//----------------- ROTAS Chainning ( exemplos ) ---------------------
// Route Handler em corrente simples
router.get('/hello(.html)?', (req, res, next) => {
  console.log("tentou rodar hello.html")
  next() // Chama a proxima função na corrente
}, (err, res) => {
  res.send('Hello World!')
});
const one = (req, res, next) => {
  console.log("one")
  next()
};
const two = (req, res, next) => {
  console.log("two"),
    next()
};
const three = (req, res, next) => {
  console.log("three"),
    res.send('Terminou')
};
router.get('/chain(.html)?', [one, two, three]); // Passa por todas elas