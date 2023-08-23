import { Page } from "../../singlight.min.js";

export default class PostShowPage extends Page {
    post = {title:"Loading ...", body: "Please wait, post data will loading from server ..."}
    template() {
        return this.load("navbar") +
            "<a @back>Back</a>" +
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