import "../css/style.css";
import { constructPyramid } from "./components/FoodPyramid";

const container = document.getElementById("pyramid");

const blocks = [
    { value: 1, title: "Grains", color: "#e74c3c" },
    { value: 3, title: "Fruit & Vegetables", color: "#f39c12" },
    { value: 5, title: "Diary & Meat", color: "#f1c40f" },
    { value: 11, title: "Grass, Oil & Sweets", color: "#3498db" },
];

container.innerHTML = constructPyramid([...blocks]);
