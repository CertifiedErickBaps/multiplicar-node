const fs = require("fs");
const colors = require("colors");

listarTabla = (base, limite) => {
  console.log("================".green);
  console.log(`tabla de ${base}`.green);
  console.log("================".green);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    //Promesas

    if (!Number(base)) {
      reject(`El valor ${base} no es numero`);
      return;
    } else if (!Number(limite)) {
      reject(`El valor ${limite} no es numero`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt con limite ${limite} ha sido creado`);
    });
  });
};

module.exports = {
  //Exportacion para otro archivo js
  crearArchivo,
  listarTabla
};
