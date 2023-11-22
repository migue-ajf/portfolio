export class TwoButton extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      // Importar el contenido HTML
      fetch('js/TwoButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
  
      // Importar el contenido CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './js/TwoButton/estilo.css';
      this.appendChild(link);
    }
  }
  
  window.customElements.define('two-button', TwoButton)