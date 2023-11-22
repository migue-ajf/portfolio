export class EightButton extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML =
         fetch('js/EightButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}
window.customElements.define('eight-button', EightButton)
