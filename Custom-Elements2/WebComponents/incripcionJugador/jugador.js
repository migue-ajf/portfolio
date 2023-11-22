class jugador extends HTMLElement {
    constructor(nombre, dorsal, posicion, caracteristicas) {
        super();
        this.nombre = nombre;
        this.dorsal = dorsal;
        this.posicion = posicion;
        this.caracteristicas = caracteristicas;
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Cargar HTML y CSS de manera síncrona
        const htmlPromise = fetch('WebComponents/incripcionJugador/index.html')
            .then(response => response.text());

        const cssPromise = fetch('./WebComponents/incripcionJugador/estilo.css')
            .then(response => response.text());

        Promise.all([htmlPromise, cssPromise])
            .then(([html, css]) => {
                shadow.innerHTML = html;

                const style = document.createElement('style');
                style.textContent = css;
                shadow.appendChild(style);
            })
            .catch(error => console.error('Error cargando HTML o CSS:', error));
    }

    ensenyardatos() {
        console.log(`${this.nombre}, ${this.dorsal}, ${this.posicion},${this.caracteristicas}`);
    }
}

function cogerDatos() {
    var nombre = document.getElementById("names").value;
    var dorsal = document.getElementById("dorsal").value;
    var posicion = document.getElementById("posicion").value;
    var caracteristicas = document.getElementById("caracteristicas").value;

    alert(nombre + " " + dorsal + " " + posicion + " " + caracteristicas);
}

window.customElements.define('formulario-jugador', jugador);
