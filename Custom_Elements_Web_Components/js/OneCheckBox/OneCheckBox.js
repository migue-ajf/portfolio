export class OneCheckBox extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML =  
        fetch('js/OneCheckBox/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('one-checkbox',OneCheckBox)
