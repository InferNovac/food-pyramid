export const COLORS = ["#e74c3c", "#f39c12", "#f1c40f", "#3498db", "#27ae60"];

export const TRAPEZOID = (top, bottom) => {
    const topOffset = (100 - top) / 2;
    const bottomOffset = (100 - bottom) / 2;
    console.log(topOffset);
    console.log(bottomOffset);
    const topRule =
        topOffset === 0 ? "50% 0" : `${topOffset}% 0%, ${100 - topOffset}% 0%`;

    const bottomRule = `${100 - bottomOffset}% 100%, ${bottomOffset}% 100%`;

    return `polygon(${topRule}, ${bottomRule});`;
};

export const BUTTON = (initalValue) => {
    const button = document.createElement("button");
    button.innerText = initalValue;
    button.classList.add("button");
    return button;
};
