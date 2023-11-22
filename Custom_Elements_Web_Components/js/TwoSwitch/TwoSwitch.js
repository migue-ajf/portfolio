export class TwoSwitch extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback() {
      // Importar el contenido HTML
      fetch('js/TwoSwitch/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
  
      // Importar el contenido CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './js/TwoSwitch/estilo.css';
      this.appendChild(link);
    }
  }
  
  window.customElements.define('two-switch', TwoSwitch);