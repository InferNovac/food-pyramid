import "../css/style.css";
import { head, body } from "./components/FoodPyramid";

const container = document.getElementById("pyramid");

head(container, 20, 20);
body(container, 40, 20);
body(container, 80, 20);
