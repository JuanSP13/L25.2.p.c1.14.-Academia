export default class Cl_Academia {
    _nombre;
    _precio;
    _cantidadAdm;
    cntTotalInsM;
    cntTotalInsQ;
    acMontoTotal;
    constructor(nombre, precio, cantidadAdm) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidadAdm = cantidadAdm;
        this.cntTotalInsM = 0;
        this.cntTotalInsQ = 0;
        this.acMontoTotal = 0;
    }
    //Sets y Gets
    set nombre(nom) {
        this._nombre = nom;
    }
    get nombre() {
        return this._nombre;
    }
    set precio(p) {
        this._precio = p;
    }
    get precio() {
        return this._precio;
    }
    set cantidadAdm(cA) {
        this._cantidadAdm = cA;
    }
    get cantidadAdm() {
        return this._cantidadAdm;
    }
    procesarAspirante(a) {
        if (a.curso === 1) {
            this.cntTotalInsM++;
        }
        else {
            this.cntTotalInsQ++;
        }
        this.acMontoTotal += this.precio;
    }
    totalCursoM() {
        return this.cntTotalInsM;
    }
    totalCursoQ() {
        return this.cntTotalInsQ;
    }
    montoTotalRecibido() {
        return this.acMontoTotal;
    }
}
