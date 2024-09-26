// Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)

// Creo las clases y constructor para clientes

export default class Clientes{ // Finalmente hay que exportar cliente e impuesto, se declara antes de la clase constructora generalmente

    constructor (nombre, impuesto) {
        this._nombre =() => {nombre // Se usa la notación de ES6 // "_nombre" es la encapsulación, indica que la variable es privada
            return nombre
        }
        this._impuesto = () => {
            return impuesto
        }
    }

    // Ahora obtengo los valores con getter
    get nombre(){ // método para obtener el nombre del cliente
        return this._nombre()
    }

    set nombre(nuevoNombre){ // metodo para cambiar el nombre del cliente
        return this._nombre = () => { // el primer return es el que se guarda como parámetro para después usarlo en el constructor
            return nuevoNombre} // con Set no es necesario el return, pero para el ejercicio si será necesario. Puede ser aquí o después.
    }

    calcularImpuesto(){
        let monto = this._impuesto()._montoBrutoAnual() // entrega la info de la variable montoBrutoAnual creada a través de la clase impuestos. Esto pasa pq Get y Set son públicos ; "()" indica métodos
        let deducc = this._impuesto()._deducciones()
        return (`El impuesto a pagar es: ${(monto - deducc)*0.21}`)
    }
}



