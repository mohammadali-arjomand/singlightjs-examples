import { Page } from "../../singlight.min.js";

export default class PostShowPage extends Page {
    post = {title:"", body: ""}
    template() {
        return this.load("navbar") +
            "<button @back>Back</button>" +
            "<h1>{{ post.title }}</h1>" +
            "<p>{{ post.body }}</p>";
    }
    setup() {
        let apiUrl = "https://jsonplaceholder.typicode.com/posts/" + this.route.id;
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => {
                this.post = json;
                this.refresh();
            })
    }
}