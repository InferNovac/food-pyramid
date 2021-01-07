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

export const constructPyramid = (blocks) => {
    const foodBlocks = calculateSections(blocks);
    return foodBlocks
        .map(
            (block) =>
                `
            <div class="pyramid-part" title="${block.title}" style="${block.style}">
            </div>
        `
        )
        .join("");
};
