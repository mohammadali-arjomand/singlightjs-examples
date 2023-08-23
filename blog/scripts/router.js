import { Router } from "./singlight.min.js";
import PostsIndexPage from "./pages/posts/index.js";
import PostShowPage from "./pages/posts/show.js";

const router = new Router();
router.setRoot("/singlightjs-examples/blog/");
router.addRoute("/", PostsIndexPage);
router.addRoute("/{id}", PostShowPage);

export default router;