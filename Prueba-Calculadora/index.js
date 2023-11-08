// Seleccionar los elementos HTML que representan el valor anterior y actual en la calculadora.
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

// Seleccionar todos los botones numéricos y operadores en la calculadora.
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// Crear una instancia de la clase "pantalla" y pasarle los elementos de visualización como parámetros.
const display = new pantalla(displayValorAnterior, displayValorActual);

// Agregar un evento de clic a cada botón numérico.
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Agregar un evento de clic a cada botón de operador.
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});
