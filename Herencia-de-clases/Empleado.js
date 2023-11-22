import { Persona } from "./Persona.js";
export class Empleado extends Persona{
    constructor(nombre, edad,cargo){
        super(nombre, edad);
        this.cargo = cargo;
    }

    trabajar(){
    console.log(`${this.nombre} está trabajando como ${this.cargo}.`);

    }
}