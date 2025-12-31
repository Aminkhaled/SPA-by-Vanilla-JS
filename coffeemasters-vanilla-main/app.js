import Store from "./services/store.js";
import Api from "./services/Api.js";
import { loadfData } from "./services/menu.js";
import Router from "./services/router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {

     loadfData();
    app.router.init();
});