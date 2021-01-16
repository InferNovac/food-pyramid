const pyramidLevel = (top, bottom) => {
    const topOffset = (100 - top) / 2;
    const bottomOffset = (100 - bottom) / 2;
    const topRule =
        topOffset === 0 ? "50% 0" : `${topOffset}% 0%, ${100 - topOffset}% 0%`;

    const bottomRule = `${100 - bottomOffset}% 100%, ${bottomOffset}% 100%`;

    return `polygon(${topRule}, ${bottomRule});`;
};

const calculateSections = (blocks) => {
    const totalArea = blocks.reduce((total, food) => total + food.value, 0);
    let areaSum = 0;
    let previousSizeCoefficent = 0;
    const foodBlocks = blocks.map((food) => {
        areaSum += food.value;
        const areaRatio = areaSum / totalArea;
        const sizeCoefficent = Math.sqrt(areaRatio);
        const sliceHeight = sizeCoefficent - previousSizeCoefficent;
        const path = pyramidLevel(
            previousSizeCoefficent * 100,
            sizeCoefficent * 100
        );
        previousSizeCoefficent = sizeCoefficent;
        return {
            title: food.title,
            style: `
            width: 100%;
            shape-outside: ${path};
            clip-path: ${path};
            height: ${sliceHeight * 100}%;
            background-color: ${food.color};
        `,
        };
    });
    return foodBlocks;
};

const increaseListener = (intakeId) => {
    const intake = document.getElementById(intakeId);
    const value = parseInt(intake.innerText);
    intake.innerText = value + 1;
};

const decreaseListener = (intakeId) => {
    const intake = document.getElementById(intakeId);
    const value = intake.innerText;
    if (value > 0) {
        intake.innerText = value - 1;
    }
};

const intakeUI = (id) => {
    const intakeId = `intake${id}`;
    const increase = document.createElement("button");
    const intake = document.createElement("div");
    const decrease = document.createElement("button");
    increase.classList.add("add");
    decrease.classList.add("minus");
    intake.setAttribute("id", intakeId);
    intake.classList.add("space-between");
    increase.textContent = "+";
    intake.textContent = "0";
    decrease.textContent = "-";
    increase.addEventListener("click", () => increaseListener(intakeId));
    decrease.addEventListener("click", () => decreaseListener(intakeId));
    return [increase, intake, decrease];
};

export const constructPyramid = (blocks) => {
    const foodBlocks = calculateSections(blocks);
    return foodBlocks.map((block, index) => {
        const foodBlock = document.createElement("div");
        foodBlock.title = block.title;
        foodBlock.style = block.style;
        foodBlock.classList.add("pyramid-part");
        const UI = intakeUI(index);
        UI.forEach((element) => {
            foodBlock.appendChild(element);
        });
        return foodBlock;
    });
};
