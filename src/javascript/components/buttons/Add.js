const Add = (button, target) => {
    button.addEventListener("click", () => {
        const quantity = target.innerText;
        target.innerText = quantity + 1;
    });
};

export default Add;
