export const addDate = (element) => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getUTCFullYear();
    element.innerText = `${day} / ${
        month < 10 ? "0" + month : month
    } / ${year}`;
};
