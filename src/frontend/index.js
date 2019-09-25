import "./index.css";

import SPARouter from "@kodnificent/sparouter";

import mealPage from "./pages/meal";
import homePage from "./pages/home";

const options = {
  historyMode: true // set this to true if you use the HTML5 history mode API
};
const router = new SPARouter(options);

router.get("/", homePage);
router.get("/meals/{id}", mealPage);

router.init();
