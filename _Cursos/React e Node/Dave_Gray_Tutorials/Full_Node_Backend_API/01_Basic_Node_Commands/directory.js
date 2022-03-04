const fs = require('fs');


// Checa se o diretorio existe, se n, cria
if (!fs.existsSync('./temp')) {

  fs.mkdir('./temp', (erro) => {
    if (erro) throw erro
    console.log("Directory Created");
  })
}

if (fs.existsSync('./temp')) {

  // Remove o diretorio
  fs.rmdir('./temp', (erro) => {
    if (erro) throw erro
    console.log("Directory removed");
  })

}

