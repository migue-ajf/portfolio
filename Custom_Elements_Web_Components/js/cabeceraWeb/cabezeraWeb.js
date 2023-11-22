// cabecera-web.js
export class CabeceraWeb extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Importar el contenido HTML
      fetch('js/cabeceraWeb/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
  
      // Importar el contenido CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './js/cabeceraWeb/estilo.css';
      this.appendChild(link);
    }
  }
  
  window.customElements.define('cabecera-web', CabeceraWeb);
  