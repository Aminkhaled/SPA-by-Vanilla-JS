import Store from "./services/store.js";
import Api from "./services/Api.js";
import { loadData } from "./services/menu.js";
import Router from "./services/router.js";
import {DetailsPage} from "./components/DetailsPage.js";
import {MenuPage} from "./components/MenuPage.js";
import {OrderPage} from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {

     loadData();
    app.router.init();
});

window.addEventListener("cart-updated", event => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty == 0;
});