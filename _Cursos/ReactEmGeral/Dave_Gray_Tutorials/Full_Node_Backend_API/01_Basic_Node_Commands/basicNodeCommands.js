const math = require('./math'); // Import customizado
const { add, subtract, multiply, divide } = require('./math'); // Import customizado destruturados

console.log('math.add(2,3) >>', math.add(2, 3))
console.log('add(2,3) >>', add(2, 3))

console.log("global >>", global); //Funções globais
const os = require("os"); //Funções relacioandas ao sistema operacional
const path = require("path"); // Funções relacionadas a Caminhos de Arquivos

console.log("os.type >>", os.type()); //Tipo do sistema operacional
console.log("os.version >>", os.version()); //Versão do sistema operacional
console.log("os.homedir >>", os.homedir()); //Diretorio principal do sistema operacional

console.log("__dirname >>", __dirname); //Caminho até a pasta atual
console.log("__filename >>", __filename); // Caminho até o arquivo atual

console.log("path.dirname >>", path.dirname(__filename)); // Caminho da pasta atual
console.log("path.basename >>", path.basename(__filename)); // Nome do Arquivo atual
console.log("path.extname >>", path.extname(__filename)); // Nome da extensão do arquivo atual (.js)

console.log("path.parse >>", path.parse(__filename)); // Todos os dados daquele Arquivo (Base, Root, Dir, extension, name)
