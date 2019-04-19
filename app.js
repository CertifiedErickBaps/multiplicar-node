const { argv } = require("./config/yargs");
const colors = require("colors");
const { crearArchivo, listarTabla } = require("./multiplicar/mult"); //Destructuracion

let comando = argv._[0];

switch (comando) {
  case "listar":
    console.log("listar");
    listarTabla(argv.base, argv.limite);
    break;
  case "crear":
    console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
      .catch(e => console.log(e));
    break;
  default:
    console.log("Comando no reconocido");
}
