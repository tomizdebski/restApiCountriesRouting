export default class {
    constructor() {
        this.app_div = document.getElementById('app');
        this.cardContainer = document.createElement('div');
        this.modeDarkLight= "light";
    }
    setTitle(title) {
        document.title = title;
    }

    header() {
        const header = document.createElement('div');
        header.className = "header";
        header.innerText = "Where in the world?";
        const buttonToggle = document.createElement('button');
        buttonToggle.className = "button header__toggle";
        buttonToggle.innerHTML= `<ion-icon  name='moon'></ion-icon>Dark mode`;
        header.appendChild(buttonToggle);
        this.app_div.appendChild(header);

        
    }

    searchFilter() {
        const searchFilter = document.createElement('div');
        searchFilter.className = "containerSF";
        searchFilter.innerHTML = `
        <div class="containerSF__search">
            <ion-icon class="containerSF__icon" name="search-outline"></ion-icon>
            <input type="text" class="containerSF__input" placeholder="Search for a country..">
        </div>
    
        <div class="containerSF__filter">
            <select class="containerSF__option" id="region">
                <option class="containerSF__option-value" value="Africa">Africa</option>
                <option class="containerSF__option-value" value="America">America</option>
                <option class="containerSF__option-value" value="Asia">Asia</option>
                <option class="containerSF__option-value" value="Europe">Europe</option>
                <option class="containerSF__option-value" value="Oceania">Oceania</option>
            </select>
        </div>
        `;
        this.app_div.appendChild(searchFilter);
    }

    buttonBack() {
        const searchFilter = document.createElement('div');
        searchFilter.className = "containerSF";
        searchFilter.innerHTML = `
        <a href="/" class="nav__link" data-link>
            <button class="button button-back">&lt;- Back</button>
        </a>
        
        `;
        this.app_div.appendChild(searchFilter);
    }



    getHtml() {
        return "";
    }
}