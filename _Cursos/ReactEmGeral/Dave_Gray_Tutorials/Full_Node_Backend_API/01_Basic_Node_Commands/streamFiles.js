const fs = require('fs');

// Lê arquivos grandes em chunks
const readStream = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });

// Escreve arquivos grandes, em chunks
const writableStream = fs.createWriteStream('./files/Stream-lorem.txt')

/*// Listener de Data
 readStream.on('data', (dataChunk) => {
 writableStream.write(dataChunk)
})*/


// Versão mais eficiente
readStream.pipe(writableStream)