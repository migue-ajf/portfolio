export class FiveButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = 
        fetch('js/FiveButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('five-button',FiveButton)
