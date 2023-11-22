class barraOpciones extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        
         fetch('WebComponents/barraOpciones/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;  
          
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './WebComponents/barraOpciones/estilo.css';
        this.appendChild(link);
        });

      
      
    }
}
window.customElements.define('barra-opciones', barraOpciones)
