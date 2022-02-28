const express = require('express');
const router = express.Router();
const path = require('path');

//        Regex pra rota ( começa e terminar com / ou ser index com .html opcional)
router.get('^/$|/index(.html)?', (req, res) => {
  //res.sendFile('./views/index.html', { root: __dirname }) //Envia arquivos como resposta
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})



module.exports = router
