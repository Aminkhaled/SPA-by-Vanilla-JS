import Api from "./Api.js";


export async function loadfData(){
    app.store.menu = await Api.fetchMenu();
}