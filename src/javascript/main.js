import "../css/style.css";
import { PYRAMID, PYRAMID_DATE, PYRAMID_NAME } from "./components/Constant";
import { constructPyramid } from "./components/FoodPyramid";
import { addName } from "./components/PyramidName";
import { addDate } from "./components/PyramidDate";

const blocks = [
    { value: 1, title: "Grains", color: "#da3b26" },
    { value: 2, title: "Fruit & Vegetables", color: "#efbd40" },
    { value: 3, title: "Diary & Meat", color: "#f6e359" },
    { value: 4, title: "Grass, Oil & Sweets", color: "#479ff8" },
    { value: 5, title: "Grass, Oil & Sweets", color: "#a37b4b" },
    { value: 6, title: "Grass, Oil & Sweets", color: "#81d653" },
];

const pyramid = constructPyramid(blocks);

pyramid.forEach((foodBlock) => {
    PYRAMID.appendChild(foodBlock);
});

addName(PYRAMID_NAME);
addDate(PYRAMID_DATE);
