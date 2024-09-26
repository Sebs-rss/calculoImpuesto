// Importo ambas clase aquí, así hago todo modular

import Cliente from './clientes.js';
import Impuestos from './impuestos.js';

// Luego instancio nuevos objetos, primero cliente con parámetros y luego la clase impuestos

let tax1 = new Impuestos(10000, 2000); // (montoBrutoAnual, deducciones) , va primero porque lo usa luego el constructor del nuevo cliente
let cliente1 = new Cliente("Sebastian", tax1); // (nombre, impuesto) con "impuesto" como la clase

let cliente2 = new Cliente("Rodrigo", tax1);


console.log(cliente1.calcularImpuesto()) // para el nuevo cliente le calculo su impuesto con la función dentro de esa clase
console.log(cliente2.calcularImpuesto())

// Queda compilar, con el comando.... ==> yay!, success!

// Ejecuto en la consola:  npx babel src --out-dir dist
// Crea una carpeta "dist", y ahí ejecuto en la consola: ' node dist/main.js '

    // La primera vez me salió un error de 'module not found'

    // Solución del error???: 

    // Probé esto y no funcionó... me arrojó nuevos errores :(
    /* Para que funcione el ejercicio de babel que teníamos problemas con los modulos que no estaban instalados. hay que instalar estas.
npm install --save-dev @babel/core    // para que no de error cuando se hace la primera transpilación
npm install --save-dev @babel/preset-env  // para poder transpilar el archivo json "babel.config.json" y así forzar la transpilación a ES5.
npm install core-js --save  // para que al correr el archivo "rest-spread-objetos.js" no de error que falta el "core-js/modules/es.symbol.description.js" */