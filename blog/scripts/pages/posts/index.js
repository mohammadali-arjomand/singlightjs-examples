import { Page } from "../../singlight.min.js";

export default class PostsIndexPage extends Page {
    posts = [];
    template() {
        return this.load("navbar") +
            "<div @if='{{ posts.length }} == 0'>" +
                "<h1>Loading ...</h1>" +
                "<p>Please wait, post data will loading from server ...</p>" +
            "</div>" +
            "<div class='cards' " +
                "<div @for='post of posts'>" +
                    "<h3>{{ post.title }}</h3>" +
                    "<a @route='{{ post.id }}'>See more</a>" +
                    "<hr>" +
                "</div>" +
            "</div>";
    }
    setup() {
        let apiUrl = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => {
                this.posts = json;
                this.refresh();
            })
    }
}