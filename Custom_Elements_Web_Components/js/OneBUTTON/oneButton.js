export class OneButton extends HTMLElement{
    
    constructor(){
        super()
        this.color;
        this.background;
        this.attachShadow({ mode:'open'})
    }
     
    static get observedAttributes(){
        return [`color`, "backgound"];
    }

    atributeChangeCallback(colorAtr, oldValue, newValue){
        switch(colorAtr){
            case "color":
                this.color= newValue;
            break;
            case "background":
                this.background= newValue;
            break;
        }
    }
    connectedCallback(){
        
        fetch('js/OneButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.shadowRoot.innerHTML = html;
        });
    }
}

window.customElements.define('one-button',OneButton)