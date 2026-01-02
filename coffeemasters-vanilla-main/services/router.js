const Router = {
     init: () => {
          document.querySelectorAll('a.navlink').forEach(link => link.addEventListener('click', e => {
              e.preventDefault();
              Router.go(e.target.getAttribute('href'),true);
          }))
          window.addEventListener('popstate', (e) => {
              Router.go(e.state ? e.state.page : "/", false);
          });
     },
     go: (router,addToHistory = true) => {

         if(addToHistory){
             history.pushState({ page: router }, null, `${router}`);
         }
        let  pageElement = null;
        let  element = null;
         switch (router) {
             case "/":
                 pageElement = "home";
              element =     document.createElement("menu-page");

                 break;
                 case "/order":
                     pageElement = "order";
                     element =     document.createElement("order-page");

                     break;
                     default:
                         if (router.startsWith("/product-")) {
                             element = document.createElement("details-page");
                             pageElement = element;
                             element.dataset.productId = router.substring(router.lastIndexOf("-")+1);
                         }
                         break;


         }
         if(pageElement){
             document.querySelector('main').innerHTML = "";
             document.querySelector('main').appendChild(element);
             window.scrollTo(0,0);
         }

     }
}
export default Router;