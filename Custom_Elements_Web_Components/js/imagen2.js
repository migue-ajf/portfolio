export class Imagen2 extends HTMLElement {
    constructor() {
      // Siempre debe llamarse primero al constructor padre
      super();
  
      // Se crea el shadow root
     var shadowRoot = this.attachShadow({mode: 'open'});
  
      //var shadowRoot = this.createShadowRoot();
      // Se crea un elemnto img y se asignan sus atributos.
      var imag = document.createElement('img');
       
  
     // imag.alt = this.getAttribute('alt-img');
      imag.alt = 'Triangle';
      imag.src = 'img/OIP.jpeg';
      imag.width = '150';
      imag.height = '150';
      imag.className = 'product-img';
  
    
      // Añadir la imagen al shadow root.
  
     shadowRoot.appendChild(imag);
  
  
    }
  }
  // Definir el nuevo elemento.
  window.customElements.define('x-image2', Imagen2)
  