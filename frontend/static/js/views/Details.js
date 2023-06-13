import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Details");
    }



    getHtml() {
    
        this.app_div.innerHTML="";
        const url ="https://restcountries.com/v3.1/all";
        //let app_div = document.getElementById('app');

        this.header();
        this.buttonBack();

        this.cardContainer.className = "card_container";
        this.cardContainer.innerHTML='';
        const cardBig = document.createElement('div');
        console.log(this.cardContainer);
        cardBig.className = "card-big";
        cardBig.innerHTML = `
                        <div class="card-big__flag-container">
                            <img class="card-big__img" src="https://flagcdn.com/mp.svg" alt="flag">
                        </div>
                        <div class="card-big__desc-country">
                            <div class="card-big__desc-1">
                                <h1>Northern Mariana Islands</h1>
                                <p>Native Name: brak</p>
                                <p>Population: 57557</p>
                                <p>Region: Oceania</p>
                                <p>Sub Region: Micronesia</p>
                                <p>Capital: Saipan</p>
                            </div>
                            <div class="card-big__desc-2">
                                <p>Top LevelDomain: .mp</p>
                                <p>Currencies: United States dollar</p>
                                <p>Languages: Carolinian,Chamorro,English</p>
                                <p>Border Countries: undefined</p>
                            </div>
                         </div>`;
        this.cardContainer.appendChild(cardBig);
        this.app_div.appendChild(this.cardContainer);

     }
}