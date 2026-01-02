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
        const template = document.getElementById('menu-page-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
        window.addEventListener('menu-updated',() => this.render());
        this.render();
    }
    render(){
        let menu = this.root.querySelector('#menu');
        if(app.store.menu){
            for(const category of app.store.menu){
                console.log(category.products);
                const item = document.createElement('li');
                item.innerHTML = `<h3>${category.name}</h3><ul>
            
</ul>`;
                menu.appendChild(item);
                category.products.forEach(product => {
                     const productItem = document.createElement('product-item');
                    productItem.dataset.product = JSON.stringify(product );
                    item.appendChild(productItem);

                })
            }
        }else {
            menu.innerHTML = "Loading...";
        }
    }
}
customElements.define('menu-page',MenuPage);