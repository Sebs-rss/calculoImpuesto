"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
// Creo las clases y constructor para clientes
var Clientes = exports["default"] = /*#__PURE__*/function () {
  // Finalmente hay que exportar cliente e impuesto, se declara antes de la clase constructora generalmente

  function Clientes(nombre, impuesto) {
    _classCallCheck(this, Clientes);
    this._nombre = function () {
      nombre; // Se usa la notación de ES6 // "_nombre" es la encapsulación, indica que la variable es privada
      return nombre;
    };
    this._impuesto = function () {
      return impuesto;
    };
  }

  // Ahora obtengo los valores con getter
  return _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      // método para obtener el nombre del cliente
      return this._nombre();
    },
    set: function set(nuevoNombre) {
      // metodo para cambiar el nombre del cliente
      return this._nombre = function () {
        // el primer return es el que se guarda como parámetro para después usarlo en el constructor
        return nuevoNombre;
      }; // con Set no es necesario el return, pero para el ejercicio si será necesario. Puede ser aquí o después.
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var monto = this._impuesto()._montoBrutoAnual(); // entrega la info de la variable montoBrutoAnual creada a través de la clase impuestos. Esto pasa pq Get y Set son públicos ; "()" indica métodos
      var deducc = this._impuesto()._deducciones();
      return "El impuesto a pagar es: ".concat((monto - deducc) * 0.21);
    }
  }]);
}();