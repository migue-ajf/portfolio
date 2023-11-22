export class ThreeButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('js/ThreeButton/index.html')
        .then(response => response.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
}

window.customElements.define('three-button', ThreeButton);
