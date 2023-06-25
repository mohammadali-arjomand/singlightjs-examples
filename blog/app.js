class TodoApp extends Singlight {
    home = "postsRoute";
    routes = {
        postsRoute: {
            controller: this.postsController,
            api: "https://jsonplaceholder.typicode.com/posts"
        },
        showPostRoute: {
            controller: this.showPostController,
            api: "https://jsonplaceholder.typicode.com/posts/::id"
        }
    };
    postsController(posts) {
        let postsItems = new Component();
        let post;
        let counter = 0;
        for (post of posts) {
            if (counter > 20) {
                break;
            }
            postsItems.add("postsListItemComponent", {
                id: post.id,
                title: post.title,
            })
            counter++;
        }

        return {
            page: "postsPage",
            compact: {
                postsItem: postsItems.get()
            }
        }
    }
    showPostController(post) {
        return {
            page: "showPostPage",
            compact: {
                title: post.title,
                body: post.body
            }
        }
    }
}
const todoApp = new TodoApp();
todoApp.mount("#app");