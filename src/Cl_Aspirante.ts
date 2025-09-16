import Cl_Academia from "./Cl_Academia";
export default class Cl_Aspirante{
    private _nombre: string;
    private _condicion: number;
    private _curso: number;
    constructor(nombre: string, condicion: number, curso: number) {
        this._nombre = nombre;
        this._condicion = condicion;
        this._curso = curso;
    }

    //Sets y Gets
    set nombre(n: string) {
        this._nombre = n;
    }
    get nombre(): string {
        return this._nombre;
    }

    set condicion(cond: number) {
        this._condicion = cond;
    }
    get condicion(): number {
        return this._condicion;
    }

    set curso(c: number) {
        this._curso = c;
    }
    get curso(): number {
        return this._curso;
    }
    montoPagar(): number{
        if (this.curso == 1) { //Curso Matemática
            if (this.condicion == 2) {
                return 10*50/100; } //50% menos a becados
            else {
                return 10; }
            }
        else if (this.condicion == 2) { //Curso Química
            return 15*50/100; } //50% menos a becados
            else {
                return 15; }
    }
}