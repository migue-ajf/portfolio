export class FourButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML =  
        fetch('js/FourButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('four-button', FourButton)