class pantalla {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    // Método para borrar el último dígito ingresado.
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    // Método para borrar todo el contenido de la calculadora.
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    // Método para realizar cálculos matemáticos (sumar, restar, multiplicar, dividir, etc.).
    computar(tipo) {
        // Si ya hay una operación pendiente, realiza el cálculo antes de continuar.
        this.tipoOperacion !== 'igual' && this.calcular();
        
        // Establece el nuevo tipo de operación.
        this.tipoOperacion = tipo;
        
        // Guarda el valor actual como valor anterior y reinicia el valor actual.
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        
        this.imprimirValores();
    }

    // Método para agregar un número al valor actual.
    agregarNumero(numero) {
        // Evita agregar un segundo punto decimal si ya hay uno.
        if(numero === '.' && this.valorActual.includes('.')) return;
        
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    // Método para mostrar los valores en la pantalla de la calculadora.
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    // Método para realizar el cálculo final cuando se pulsa el botón igual (=).
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        
        // Utiliza el objeto "calculadora" para realizar la operación según el tipo.
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}
