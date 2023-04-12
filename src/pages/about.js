import { FONTS, IMAGES } from "../constants";
import { addAboutParagraph, addTitle } from "../functions";


const aboutContainer = document.createElement("section")
aboutContainer.id = "about"
const decorativeSquare = document.createElement('div')
decorativeSquare.classList.add('square')

const title = addTitle("About")
title.classList.add("about__title")
aboutContainer.append(title)

/** First Paragraph */
const firstAboutParagraph = document.createElement("div")
firstAboutParagraph.classList.add("about__paragraph")

const firstText = addAboutParagraph("Welcome to {Tortuga}, a Caribbean-inspired restaurant that offers a taste of paradise in every dish. {Our mission} is to bring the warmth and flavors of the islands to our guests, offering a unique and unforgettable dining experience.")

const firstImage = document.createElement("img")
firstImage.setAttribute("src", IMAGES.first)

firstAboutParagraph.append(firstText, firstImage)

/** Second Paragraph */
const secondAboutParagraph = document.createElement("div")
secondAboutParagraph.classList.add("about__paragraph")

const imageWrapper = document.createElement("figure")
imageWrapper.classList.add("about__imageWrapper")

const secondImage = document.createElement('img')
secondImage.setAttribute('src', IMAGES.second)
imageWrapper.append(secondImage, decorativeSquare)

const secondText = addAboutParagraph(
`{Our menu} is carefully crafted to showcase the best of Caribbean cuisine, with a focus on fresh seafood, vibrant spices, and bold flavors. From our signature conch fritters to our mouth-watering grilled shrimp, every dish is made with the utmost care and attention to detail.

At Tortuga, {we believe} that great food is best enjoyed in a warm and welcoming atmosphere. Our restaurant is designed to transport you to a tropical paradise, with elegant yet relaxed decor and friendly, attentive service.`
)

secondAboutParagraph.append(imageWrapper, secondText)

/** Third Paragraph */

const thirdAboutParagraph = document.createElement("div")
thirdAboutParagraph.classList.add('about__paragraph-wide')

const thirdImage = document.createElement('img')
thirdImage.setAttribute('src', IMAGES.third)

const thirdText = addAboutParagraph("Welcome to {Tortuga}, a Caribbean-inspired restaurant that offers a taste of paradise in every dish. {Our mission} is to bring the warmth and flavors of the islands to our guests, offering a unique and unforgettable dining experience.")

thirdAboutParagraph.append(thirdImage, decorativeSquare, thirdText)

/** footer */

const footer = document.createElement('footer')

const footerMessage = document.createElement('p')
footerMessage.classList.add(FONTS.title)
footerMessage.textContent = "Welcome to Tortuga!"

const footerCircle = document.createElement('div')
footerCircle.classList.add('circle')

footer.append(footerMessage, footerCircle)


aboutContainer.append(firstAboutParagraph, secondAboutParagraph, thirdAboutParagraph, footer)



export {aboutContainer as about}
