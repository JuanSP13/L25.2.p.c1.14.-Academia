export default class Cl_Aspirante {
    _nombre;
    _condicion;
    _curso;
    constructor(nombre, condicion, curso) {
        this._nombre = nombre;
        this._condicion = condicion;
        this._curso = curso;
    }
    //Sets y Gets
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set condicion(cond) {
        this._condicion = cond;
    }
    get condicion() {
        return this._condicion;
    }
    set curso(c) {
        this._curso = c;
    }
    get curso() {
        return this._curso;
    }
    montoPagar() {
        if (this.curso == 1) { //Curso Matemática
            if (this.condicion == 2) {
                return 10 * 50 / 100;
            } //50% menos a becados
            else {
                return 10;
            }
        }
        else if (this.condicion == 2) { //Curso Química
            return 15 * 50 / 100;
        } //50% menos a becados
        else {
            return 15;
        }
    }
}
