const fs = require('fs'); //Modulo de modificar arquivos do node
const fsPromises = require('fs').promises; //fs com promisses
const path = require("path"); // Funções relacionadas a Caminhos de Arquivos

// Concatena o caminho do Diretorio + a Pasta escolhida + Arquivo escolhido
// Concaternar o diretorio é útil para tratar diferenças de caminho entre sistemas
const readFilePath = path.join(__dirname, 'files', 'lorem.txt')
const writeFilePath = path.join(__dirname, 'files', 'reply.txt')
const writePromisseFilePath = path.join(__dirname, 'files', 'promisse.txt')
const renameFilePath = path.join(__dirname, 'files', 'renamed.txt')
const renamedPromisseFilePath = path.join(__dirname, 'files', 'renamedPromisse.txt')


// Utilizando fs assincronamente com promisses
// -------------------(1) Forma assincrona para criar e modificar arquivos ----------------
const fileOperations = async () => {
  try {
    const textoLido = await fsPromises.readFile(readFilePath, 'utf8')

    // // Deleta arquivos
    // await fsPromises.unlink(writePromisseFilePath)

    // Escreve arquivos
    await fsPromises.writeFile(writePromisseFilePath, textoLido)

    //Adiciona mais conteúdo para o arquivo (Se o arquivo especificado não existir, ele cria)
    await fsPromises.appendFile(writePromisseFilePath, "\n\nTexto Adicional inserido")

    //Renomeia o arquivo ( arquivo anterior , novo arquivo)
    await fsPromises.rename(writePromisseFilePath, renamedPromisseFilePath)

    const novoArquivoModificado = await fsPromises.readFile(renamedPromisseFilePath, 'utf8')
    console.log('Arquivo >>', novoArquivoModificado)

  } catch (error) {
    console.error(error)
  }
}

fileOperations()

// -------------------(2) Forma comum para criar e modificar arquivos ----------------

// Lê arquivos
fs.readFile(readFilePath, 'utf8', (erro, data) => { //Utf8 transforma em algo legivel
  if (erro) throw erro
  console.log(data) // Se logar o data sem o utf8 ou .ToString(), ele vem em buffer binario
  console.log("-------------------------------------------------------------")
})

// Escreve arquivos
fs.writeFile(writeFilePath, 'Texto para escrever no arquivo', (erro) => {
  if (erro) throw erro
  console.log("Write completed")

  //Adiciona mais conteúdo para o arquivo (Se o arquivo especificado não existir, ele cria)
  fs.appendFile(writeFilePath, ', Texto atualizado que vai ser adicionado após', (erro) => {
    if (erro) throw erro
    console.log("Append completed")

    //Renomeia o arquivo ( arquivo anterior , novo arquivo)
    fs.rename(writeFilePath, renameFilePath, (erro) => {
      if (erro) throw erro
      console.log("Rename completed")
    })
  })
})

// da Exit quando pega erros jogados no Node
process.on('uncaughtException', err => {
  console.error(`Houve um erro não tratado: ${err}`)
  process.exit(1)
})