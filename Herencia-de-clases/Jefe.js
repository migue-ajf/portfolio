import { Empleado } from "./Empleado.js";
export class Jefe extends Empleado{
    constructor(nombre, edad, cargo, departamento){
        super(nombre, edad, cargo);
        this.departamento = departamento;
        this.empreadosACargo = [];
    }

    agregarEmpleado(empleado){
        this.empreadosACargo.push(empleado);
        console.log(`${empleado.nombre} ha sido agregado al departamento de ${this.departamento}`);
    }

    presentarse() {
        super.presentarse();
        console.log(`Soy jefe del departamento de ${this.departamento}.`);
      }
    }
