import Cl_Aspirante from "./Cl_Aspirante.js";
import Cl_Academia from "./Cl_Academia.js";
const aca = new Cl_Academia("Matemática", 10, 5);
const asp1 = new Cl_Aspirante("Juan", 1, 2);
const asp2 = new Cl_Aspirante("Carlos", 2, 1);
const asp3 = new Cl_Aspirante("Ana", 1, 1);
const asp4 = new Cl_Aspirante("Raúl", 2, 1);
aca.procesarAspirante(asp1);
aca.procesarAspirante(asp2);
aca.procesarAspirante(asp3);
aca.procesarAspirante(asp4);
console.log(asp1.nombre + "debe pagar $" + asp1.montoPagar());
console.log(asp2.nombre + "debe pagar $" + asp2.montoPagar());
console.log(asp3.nombre + "debe pagar $" + asp3.montoPagar());
console.log(asp4.nombre + "debe pagar $" + asp4.montoPagar());
console.log("Cantidad de aspirantes en Matemática: " + aca.totalCursoM());
console.log("Cantidad de aspirantes Química: " + aca.totalCursoQ());
console.log("Monto total recibido: $" + aca.montoTotalRecibido());
let salida = document.getElementById("salida");
if (salida)
    salida.innerHTML +=
        `${asp1.nombre} debe pagar $ ${asp1.montoPagar()} <br>` +
            `${asp2.nombre} debe pagar $ ${asp2.montoPagar()} <br>` +
            `${asp3.nombre} debe pagar $ ${asp3.montoPagar()} <br>` +
            `${asp4.nombre} debe pagar $ ${asp4.montoPagar()} <br>` +
            `Cantidad de aspirantes en Matemática: ${aca.totalCursoM()} <br>` +
            `Cantidad de aspirantes Química: ${aca.totalCursoQ()} <br>` +
            `Monto total recibido: $${aca.montoTotalRecibido()}`;
else
    console.log("No se encontró la Etiqueta");
