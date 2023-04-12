import { FONTS, SVG_NAMESPACE } from "./constants"

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

function addAddressElement(title, text){
    const element = document.createElement("p")
    element.classList.add(FONTS.subTitle)

    const span = document.createElement("span")
    span.textContent = title

    const br = document.createElement("br");

    element.textContent = `${text}`
    element.prepend(span, br)

    return element
}

const starPath = "M9.54894 0.927049C9.8483 0.00573857 11.1517 0.00574037 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
const starColor = "#C56B6B"

function addStars(amount){
    const starContainer = document.createElement("div")
        starContainer.classList.add("stars")

    for (let i = 0; i < amount; i++) {
    const starSvg = document.createElementNS(SVG_NAMESPACE, "svg")
    starSvg.setAttribute("width", "21")
    starSvg.setAttribute("height", "19")
    starSvg.setAttribute("viewBox", "0 0 21 19")
    starSvg.setAttribute("fill", "none")
    starSvg.setAttribute("xmlns", SVG_NAMESPACE)

    const starShape = document.createElementNS(SVG_NAMESPACE, "path")
    starShape.setAttribute("d", starPath)
    starShape.setAttribute("fill", starColor)
    starSvg.append(starShape)
        starContainer.append(starSvg)
    }

    return starContainer
}

function addReview(criticsName, review, stars){
    const container = document.createElement("article")
        container.classList.add("reviews__element")

    const criticsNameElement = document.createElement("h3")
        criticsNameElement.classList.add(FONTS.subTitle)
        criticsNameElement.textContent = criticsName
    container.append(criticsNameElement)

    const reviewElement = document.createElement("q")
        reviewElement.classList.add(FONTS.smallText)
        reviewElement.textContent = review
    container.append(reviewElement)

    container.append(addStars(stars))

    return container
}

function addAboutParagraph(text){

    const matches = text.matchAll( /\{([^}]+)\}/g)

    let index = 0
    const elements = []
    for (const match of matches) {
      const spanText = match[1]
      const plainText = text.slice(index, match.index)
      if (plainText) {
        elements.push(document.createTextNode(plainText))
      }
      const span = document.createElement("span")
      span.textContent = spanText
      elements.push(span)
      index = match.index + match[0].length
    }
    const plainText = text.slice(index)
    if (plainText) {
      elements.push(document.createTextNode(plainText))
    }

    const p = document.createElement("p")
    p.classList.add(FONTS.smallText)
    let i = 0
    while (i < elements.length) {
      if (elements[i].nodeType === Node.TEXT_NODE) {
        const lines = elements[i].textContent.split("\n")
        for (let j = 0; j < lines.length; j++) {
          p.appendChild(document.createTextNode(lines[j]))
          if (j < lines.length - 1) {
            p.appendChild(document.createElement("br"))
          }
        }
      } else {
        p.appendChild(elements[i])
      }
      i++
    }
    return p

}

function addPlateToMenu(name, description, price){
    const plate = document.createElement("div")
    plate.classList.add("food")

    const nameElement = document.createElement("p")
    nameElement.classList.add(FONTS.subTitle)
    nameElement.textContent = name

    const descriptionElement = document.createElement("p")
    descriptionElement.classList.add(FONTS.smallText)
    descriptionElement.textContent = description

    const priceElement = document.createElement("p")
    priceElement.classList.add(FONTS.subTitle)
    priceElement.textContent = price

    plate.append(nameElement, descriptionElement, priceElement)
    return plate
}

function addMenuCard(title, plates){
    const category = document.createElement("article")
    category.classList.add("categories")

    const titleElement = document.createElement('h2')
    titleElement.classList.add(FONTS.title)
    titleElement.textContent = title

    category.append(titleElement)

    plates.forEach(each => {
        category.append(
            addPlateToMenu(
                each.name,
                each.description,
                each.price
            )
        )
    });


    return category
}

export {
    addTitle,
    addSecondTitle,
    addAddressElement,
    addReview,
    addAboutParagraph,
    addMenuCard
}
