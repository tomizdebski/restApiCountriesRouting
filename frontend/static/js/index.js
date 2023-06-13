import Dashboard from "./views/Dashboard.js";
import Details from "./views/Details.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [
        { path: "/", view: Dashboard},
        { path: "/details", view: Details},
        
    ];
    // sprawdzamy dopasowanie
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });
    // wyszukujemy dopasowanie
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }
/// nie za bardzo wiem co tu sie dzieje 
    const view = new match.route.view();
    view.getHtml();
    //document.querySelector("#app").innerHTML = view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);

        }
    })
    router();

//     const toggleDarkLight = document.querySelector(".header__toggle");
//     console.log(toggleDarkLight);
//     toggleDarkLight.addEventListener('click', (e) => {
//         const header = document.querySelector(".header");
//         const toggleLightDark = document.querySelector(".header__toggle");
//         const cardContainer = document.querySelector('.card_container');
//         const card = document.querySelectorAll('.card');
//         const contSF = document.querySelector('.containerSF');
//         const search = document.querySelector('.containerSF__input');
//         const filter = document.querySelector('.containerSF__option');
//         const buttonBack = document.querySelector('.button-back');
//         console.log(buttonBack);
     
        
//         if (modeDarkLight === "light") {
//             modeDarkLight = "dark";
//             toggleDarkLight.innerHTML = `<ion-icon  name="moon"></ion-icon>Dark mode`;
//             header.classList.add("light");
//             toggleLightDark.classList.add("light");
//             cardContainer.classList.add("light-card_container");
//             card.forEach(element => {
//                 element.classList.add("light");
//             });
//             contSF.classList.add("light-card_container");
//             if(search) search.classList.add("light-card");
//             if(filter) filter.classList.add("light-card");
//             buttonBack.classList.add("light");
//         }else if (modeDarkLight === "dark") {
//             modeDarkLight = "light"
//             toggleDarkLight.innerHTML = `<ion-icon name="sunny"></ion-icon>Light mode`;
//             header.classList.remove("light");
//             toggleLightDark.classList.remove("light");
//             cardContainer.classList.remove("light-card_container");
//             card.forEach(element => {
//                 element.classList.remove("light");
//             });
//             contSF.classList.remove("light-card_container");
//             if(search) search.classList.remove("light-card");
//             filter ? filter.classList.remove("light-card"): null;
//             buttonBack.classList.remove("light");
    
//         };
        
//     });
 })