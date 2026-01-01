export class MenuPage extends HTMLElement{
    data;
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        const styles = document.createElement('style');
        this.root.appendChild(styles)
        async function loadCss(){
           const data  = await fetch('/components/MenuPage.css');
           const css = await data.text();
            styles.textContent = css;
        }
        loadCss()
    }
    connectedCallback(){
        this.render();
    }
    render(){
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}
customElements.define('menu-page',MenuPage);