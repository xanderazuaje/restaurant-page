import { FONTS } from "./constants"

function addTitle(text){
    const h1 = document.createElement("h1")
    h1.classList.add(FONTS.title)
    h1.textContent = text

    return h1
}
function addSecondTitle(text){
    const h2 = document.createElement("h2")
    h2.classList.add(FONTS.bodyFont)
    h2.textContent = text

    return h2
}

export {addTitle, addSecondTitle}
