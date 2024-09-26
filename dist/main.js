"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importo ambas clase aquí, así hago todo modular

// Luego instancio nuevos objetos, primero cliente con parámetros y luego la clase impuestos

var tax1 = new _impuestos["default"](10000, 2000); // (montoBrutoAnual, deducciones) , va primero porque lo usa luego el constructor del nuevo cliente
var cliente1 = new _clientes["default"]("Sebastian", tax1); // (nombre, impuesto) con "impuesto" como la clase

var cliente2 = new _clientes["default"]("Rodrigo", tax1);
console.log(cliente1.calcularImpuesto()); // para el nuevo cliente le calculo su impuesto con la función dentro de esa clase
console.log(cliente2.calcularImpuesto());

// Queda compilar, con el comando.... ==> yay!, success!

// Ejecuto en la consola:  npx babel src --out-dir dist
// Crea una carpeta "dist", y ahí ejecuto en la consola: ' node dist/main.js '

// La primera vez me salió un error de 'module not found'