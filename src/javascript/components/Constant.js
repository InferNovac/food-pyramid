
export const COLORS = ["#e74c3c", "#f39c12", "#f1c40f", "#3498db", "#27ae60"];
export const TRAPEZOID_PATH = (height, topBase, bottomBase) => {

};
export const ADD_ELEMENT_TO_DOM = (parent, element) =>
    parent.appendChild(element);
export const BUTTON = (initalValue) => {
    const button = document.createElement("button");
    button.innerText = initalValue;
    button.classList.add("button");
    return button;
};
export const ADD_BUTTON = BUTTON("+");
export const SCORE_BUTTON = BUTTON("0");
export const SUBTRACT_BUTTON = BUTTON("-");
export const HEAD = "";
export const BODY = "";
export const FOOT = "";
