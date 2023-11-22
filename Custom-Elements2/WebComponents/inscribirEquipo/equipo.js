class equipo extends HTMLElement {
    constructor(nombre, ciudad, presidente) {
        super();
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.presidente = presidente;
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Cargar HTML y CSS de manera síncrona
        const htmlPromise = fetch('WebComponents/inscribirEquipo/index.html')
            .then(response => response.text());

        const cssPromise = fetch('./WebComponents/inscribirEquipo/estilo.css')
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
    var ciudad = document.getElementById("ciudad").value;
    var presidente = document.getElementById("presidente").value;

    alert(nombre + " " + ciudad + " " + presidente);
}

window.customElements.define('formulario-equipo', equipo);
