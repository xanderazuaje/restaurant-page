function addTitle(text){
    const h1 = document.createElement("h1")
    h1.classList.add('title')
    h1.textContent = text

    return h1
}

export {addTitle}
