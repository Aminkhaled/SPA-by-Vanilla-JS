import Api from "./Api";


export function loadfData(){
    app.store.menu = await Api.fetchMenu();
}