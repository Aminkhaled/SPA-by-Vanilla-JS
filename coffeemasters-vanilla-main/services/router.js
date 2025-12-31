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

         switch (router) {
             case "/":
                 pageElement = "home";

                 break;
                 case "/order":
                     pageElement = "order";
                     break;
                     default:
                         pageElement = "404";

         }
         if(pageElement){
             document.querySelector('main').innerHTML = "";
            let element =     document.createElement("h2");
                element.textContent = pageElement;
             document.querySelector('main').appendChild(element);
             window.scrollTo(0,0);
         }

     }
}
export default Router;