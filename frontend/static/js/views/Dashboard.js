import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard"); 
    }
    
    getHtml() {
        this.app_div.innerHTML="";
        const url ="https://restcountries.com/v3.1/all";
        //let app_div = document.getElementById('app');

        this.header();
        this.searchFilter();

        this.cardContainer.className = "card_container";
        this.cardContainer.innerHTML='';

        console.log(this.app_div);

        fetch(url)
        .then((request) => request.json())
        .then(res => {
            console.log(res);
            res.map(el => {
                const card = document.createElement("div");
                card.className = "card";
    
                const img = document.createElement("img");
                img.className = "card__image";
                img.src = `${el.flags.svg}`;
                card.appendChild(img);
    
                const h3 = document.createElement("h3");
                h3.className = "card__name";
                h3.innerText = `${el.name.common}`;
                card.appendChild(h3);
    
                const paragrafPop = document.createElement("p");
                paragrafPop.className = "desc card__population";
                paragrafPop.innerText = `${el.population}`;
                card.appendChild(paragrafPop);
    
                const paragrafReg = document.createElement("p");
                paragrafReg.className = "desc card__region";
                paragrafReg.innerText = `${el.region}`;
                card.appendChild(paragrafReg);
    
                const paragrafCap = document.createElement("p");
                paragrafCap.className = "desc card__capital";
                paragrafCap.innerText = `${el.capital}`;
                card.appendChild(paragrafCap);
                this.cardContainer.appendChild(card);
                this.app_div.appendChild(this.cardContainer);
            });

        const buttonToggle = document.querySelector(".header__toggle");
        buttonToggle.addEventListener('click', (e) => {
            console.log("button klikniety");
            const header = document.querySelector(".header");
            const toggleDarkLight = document.querySelector(".header__toggle");
            const toggleLightDark = document.querySelector(".header__toggle");
            const cardContainer = document.querySelector('.card_container');
            const card = document.querySelectorAll('.card');
            const contSF = document.querySelector('.containerSF');
            const search = document.querySelector('.containerSF__input');
            const filter = document.querySelector('.containerSF__option');
            //const buttonBack = document.querySelector('.button-back');
            
         
            
            if (this.modeDarkLight === "light") {
                this.modeDarkLight = "dark";
                toggleDarkLight.innerHTML = `<ion-icon  name="moon"></ion-icon>Dark mode`;
                header.classList.add("light");
                toggleLightDark.classList.add("light");
                cardContainer.classList.add("light-card_container");
                card.forEach(element => {
                    element.classList.add("light");
                });
                contSF.classList.add("light-card_container");
                if(search) search.classList.add("light-card");
                if(filter) filter.classList.add("light-card");
                //buttonBack.classList.add("light");
        
        
        
            }else if (this.modeDarkLight === "dark") {
                this.modeDarkLight = "light"
                toggleDarkLight.innerHTML = `<ion-icon name="${this.modeDarkLight =="dark" ? "sunny" : "moon"}"></ion-icon>Light mode`;
                header.classList.remove("light");
                toggleLightDark.classList.remove("light");
                cardContainer.classList.remove("light-card_container");
                card.forEach(element => {
                    element.classList.remove("light");
                });
                contSF.classList.remove("light-card_container");
                if(search) search.classList.remove("light-card");
                filter ? filter.classList.remove("light-card"): null;
                //buttonBack.classList.remove("light");
        
            };
        });
        });

        // return `
        //     <div class="header">
        //         <div class="header__name">Where in the world?</div>
        //         <button class="button header__toggle">
        //             <ion-icon name="moon" role="img" class="md hydrated"></ion-icon>
        //             Dark mode
        //         </button>
        //     </div>

        //     <div class="containerSF">
        //         <div class="containerSF__search">
        //             <ion-icon class="containerSF__icon md hydrated" name="search-outline" role="img"></ion-icon>
        //             <input type="text" class="containerSF__input" placeholder="Search for a country..">
        //         </div>
        //         <div class="containerSF__filter">
        //             <select class="containerSF__option" id="region">
        //                 <option class="containerSF__option-value" value="Africa">Africa</option>
        //                 <option class="containerSF__option-value" value="America">America</option>
        //                 <option class="containerSF__option-value" value="Asia">Asia</option>
        //                 <option class="containerSF__option-value" value="Europe">Europe</option>
        //                 <option class="containerSF__option-value" value="Oceania">Oceania</option>
        //             </select>
        //         </div>
        //     </div>
            
        //     <div class="card_container">
        //         <div class="card">
        //         <img class="card__image" src="https://flagcdn.com/jo.svg">
        //         <h3 class="card__name">Jordan</h3>
        //         <p class="desc card__population">10203140</p>
        //         <p class="desc card__region">Asia</p>
        //         <p class="desc card__capital">Amman</p>
        //         </div>
        //     </div>
        //     `;
    }
}


