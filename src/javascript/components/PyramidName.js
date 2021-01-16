export const addName = (element) => {
    element.addEventListener("click", () => {
        const name = prompt("What would you like to name your food pyramid ?");
        element.innerText = name;
    });
};
