import { TRAPEZOID } from "./Constant";

const calculateSections = (blocks) => {
    const totalArea = blocks.reduce((total, food) => total + food.value, 0);
    let areaSum = 0;
    let previousSizeCoefficent = 0;
    const foodBlocks = blocks.map((food) => {
        areaSum += food.value;
        const areaRatio = areaSum / totalArea;
        const sizeCoefficent = Math.sqrt(areaRatio);
        const sliceHeight = sizeCoefficent - previousSizeCoefficent;
        const path = TRAPEZOID(
            previousSizeCoefficent * 100,
            sizeCoefficent * 100
        );
        previousSizeCoefficent = sizeCoefficent;
        return {
            title: food.title,
            style: `
            width: 100%;
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
        UI.map((element) => {
            foodBlock.appendChild(element);
        });
        return foodBlock;
    });
};
