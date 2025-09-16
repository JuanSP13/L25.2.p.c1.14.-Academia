import Cl_Aspirante from "./Cl_Aspirante.js";
export default class Cl_Academia {

    private _nombre: string;
    private _precio: number;
    private _cantidadAdm: number;
    private cntTotalInsM: number;
    private cntTotalInsQ: number;
    private acMontoTotal: number;

    constructor(nombre: string, precio: number, cantidadAdm: number) {
        this._nombre = nombre;
        this._precio = precio;
        this._cantidadAdm = cantidadAdm;
        this.cntTotalInsM = 0;
        this.cntTotalInsQ = 0;
        this.acMontoTotal = 0;
    }

    //Sets y Gets
    set nombre(nom:string) {
        this._nombre = nom;
    }
    get nombre():string {
        return this._nombre;
    }
    set precio(p:number) {
        this._precio = p;
    }
    get precio():number {
        return this._precio;
    }
    set cantidadAdm(cA:number) {
        this._cantidadAdm = cA;
    }
    get cantidadAdm():number {
        return this._cantidadAdm;
    }

    procesarAspirante(a: Cl_Aspirante) {
        if (a.curso === 1) {
            this.cntTotalInsM++;
        } else {
            this.cntTotalInsQ++;
        }
        this.acMontoTotal += this.precio;
    }

    totalCursoM(): number {
        return this.cntTotalInsM;
    }

    totalCursoQ(): number {
        return this.cntTotalInsQ;
    }

    montoTotalRecibido(): number{
        return this.acMontoTotal;  
    }
}
