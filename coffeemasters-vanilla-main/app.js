import Api from  "services/Api";
import Store from  "services/store"
import {loadfData} from "./services/menu";
import Router from "./services/router";

window.app ={};
app.store = Store;
window.addEventListener("DOMContentLoaded",async () => {
      loadfData()
    }
)