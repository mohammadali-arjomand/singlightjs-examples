import { Singlight, Router } from "./singlight.min.js";
import router from "./router.js";

// create app
const app = new Singlight();
app.router(router);
app.mount("#app");
app.start();