const Router = {
     init: () => {
          document.querySelectorAll('a.navlink').forEach(link => link.addEventListener('click', e => {
              e.preventDefault();

          Router.go(e.target.getAttribute('href'),true);

          window.addEventListener('popstate', (e) => Router.go(e.state.page,false) );
          }))
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
                         pageElement = "details";
                         element =     document.createElement("details-page");


         }
         if(pageElement){
             document.querySelector('main').innerHTML = "";
                console.log(element);
                element.textContent = pageElement;
             document.querySelector('main').appendChild(element);
             window.scrollTo(0,0);
         }

     }
}
export default Router;