 class cabeceraNueva extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        
         fetch('WebComponents/cabecera2/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
          
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './WebComponents/cabecera2/estilo.css';
        this.appendChild(link);
        });

        
      
    }
}
window.customElements.define('cabecera-nueva', cabeceraNueva)
