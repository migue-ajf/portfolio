export class OneSwitch extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML =  fetch('js/OneSwitch/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('one-switch',OneSwitch)
