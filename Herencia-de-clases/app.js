import { Persona } from "./Persona.js";
import { Empleado } from "./Empleado.js";
import { Jefe } from "./Jefe.js";
const persona1 = new Persona("Juan", 30);
persona1.presentarse();

const empleado1 = new Empleado("Ana", 25, "Desarrollador");
empleado1.presentarse();
empleado1.trabajar();

const jefe1 = new Jefe("Carlos", 40, "Gerente", "Recursos Humanos");
jefe1.presentarse();
jefe1.trabajar();

const empleado2 = new Empleado("Elena", 28, "Diseñador");
jefe1.agregarEmpleado(empleado2);