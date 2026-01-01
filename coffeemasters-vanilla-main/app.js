import Store from "./services/store.js";
import Api from "./services/Api.js";
import { loadfData } from "./services/menu.js";
import Router from "./services/router.js";
import {DetailsPage} from "./components/DetailsPage.js";
import {MenuPage} from "./components/MenuPage.js";
import {OrderPage} from "./components/OrderPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {

     loadfData();
    app.router.init();
});