export class SevenButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML =  fetch('js/SevenButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('seven-button', SevenButton)