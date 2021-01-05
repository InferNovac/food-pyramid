import { FORM_SHAPE } from "./Constant";

export const head = (container, width, height) => {
    const piece = document.createElement("div");
    piece.innerText = "hello";
    piece.style.width = `${width}%`;
    piece.style.height = `${height}%`;
    piece.classList.add("pyramid-part");
    piece.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
    piece.style.shapeOutside = "polygon(50% 0%, 0% 100%, 100% 100%)";
    container.appendChild(piece);
};

export const body = (container, width, height) => {
    const piece = document.createElement("div");
    const { length } = container.children;
    piece.innerText = "hello";
    piece.style.width = `${width}%`;
    piece.style.height = `${height}%`;
    piece.classList.add("pyramid-part");
    piece.style.clipPath = `polygon(${length * 10}% 0%, ${
        length * 40
    }% 0, 100% 100%, 0% 100%)`;
    piece.style.shapeOutside = `polygon(${length * 3.5}% 0%, ${
        length * 10
    }% 0, 100% 100%, 0% 100%)`;
    container.appendChild(piece);
};