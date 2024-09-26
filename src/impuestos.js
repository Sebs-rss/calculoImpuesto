
// Creo las clases y constructor para clientes

export default class Impuestos{
    constructor (montoBrutoAnual , deducciones){
        this._montoBrutoAnual =() => {montoBrutoAnual // Se usa la notación de ES6 // _nombre indica que la variable es privada
            return montoBrutoAnual
        }
        this.deducciones = () => {
            return deducciones
        }
    }

    // Ahora obtengo los valores con getter
    get montoBrutoAnual(){ // método para obtener el nombre del cliente
        return this._montoBrutoAnual()
    }

    
    get deducciones(){ // método para obtener el nombre del cliente
        return this._deducciones()
    }

    set montoBrutoAnual(nuevoMontoBA){ // metodo para cambiar el nombre del cliente
        return this._montoBrutoAnual = () => { // el primer return es el que se guarda como parámetro para después usarlo en el constructor
            return nuevoMontoBA} // con Set no es necesario el return, pero para el ejercicio si será necesario. Puede ser aquí o después.
    }

    set deducciones(nuevaDeducciones){ // metodo para cambiar el nombre del cliente
        return this._deducciones = () => { // el primer return es el que se guarda como parámetro para después usarlo en el constructor
            return nuevaDeducciones} // con Set no es necesario el return, pero para el ejercicio si será necesario. Puede ser aquí o después.
    }
}
