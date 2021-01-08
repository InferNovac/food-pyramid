import "../css/style.css";
import { constructPyramid } from "./components/FoodPyramid";

const container = document.getElementById("pyramid");

const blocks = [
    { value: 3, title: "Grains", color: "#e74c3c" },
    { value: 4, title: "Fruit & Vegetables", color: "#f39c12" },
    { value: 5, title: "Diary & Meat", color: "#f1c40f" },
    { value: 11, title: "Grass, Oil & Sweets", color: "#3498db" },
];

const pyramid = constructPyramid([...blocks]);
pyramid.map((foodBlock) => {
    container.appendChild(foodBlock);
});
