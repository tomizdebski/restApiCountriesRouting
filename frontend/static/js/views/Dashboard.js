import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async getHtml() {
        return `
                <h1>Welcom</h1>
                <p>tttttt</p>
                <p>
                <a href="/posts" data-link>View recent </a>
                </p>
                `;
    }
}