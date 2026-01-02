 const store = {
     menu: null,
     cart: []
 }
 const proxy = new Proxy(store,{
     set: (target, key, value) => {
         target[key] = value;
         if( key == 'menu'){
             window.dispatchEvent(new Event('menu-updated'));
         }
         if( key == "cart"){
             window.dispatchEvent(new Event('cart-updated'));
         }
         return true;
     }
 });

 export default proxy;