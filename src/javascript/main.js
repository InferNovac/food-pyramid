import "../css/style.css";
import { PYRAMID, PYRAMID_DATE, PYRAMID_NAME } from "./components/Constant";
import { constructPyramid } from "./components/FoodPyramid";
import { addName } from "./components/PyramidName";
import { addDate } from "./components/PyramidDate";

const blocks = [
    {
        value: 1,
        title: "Foods and drinks high in fat, sugar and salt",
        color: "#e84118",
    },
    { value: 2, title: "Fats, spreads and oils", color: "#efbd40" },
    {
        value: 3,
        title: "Meat, poultry, fish eggs, beans and nuts",
        color: "#f6e359",
    },
    { value: 4, title: "Milk, yogurt and cheese", color: "#479ff8" },
    {
        value: 5,
        title: "Wholemeal cereals and breads, potatoes, pasta and rice",
        color: "#a37b4b",
    },
    { value: 6, title: "Vegetables, salad and fruit", color: "#81d653" },
];

const pyramid = constructPyramid(blocks);

pyramid.forEach((foodBlock) => {
    PYRAMID.appendChild(foodBlock);
});

addName(PYRAMID_NAME);
addDate(PYRAMID_DATE);
