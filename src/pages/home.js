import { addAddressElement, addReview, addSecondTitle, addTitle } from "../functions";
import { FONTS } from "../constants";

const homeContainer = document.createElement("main");
homeContainer.id = "home";

/**Presentation Section */
const presentation = document.createElement("div");
presentation.classList.add("home__presentation");

const presentationH1 = addTitle("Slow down and savor the flavor at Tortuga");
const presentationH2 = addSecondTitle(
  "Taste the coastal delights of the caribbean at Tortuga restaurant"
);
const button = document.createElement("button");
button.classList.add(FONTS.smallText);
button.textContent = "View our Menu";

presentation.append(presentationH1, presentationH2, button); //Add elements to presentation container

/**Image Section. */
const homeImage = document.createElement("figure");
homeImage.classList.add("home__image");

const imageElement = document.createElement("img");
imageElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
);
imageElement.setAttribute("alt", "Chef doing his magic")

const squareShape = document.createElement("div")
squareShape.classList.add("square")

const frontShape = document.createElement("div")
frontShape.classList.add("frontShape")

homeImage.append(imageElement, squareShape, frontShape) //Add elements to image container

/**Information Aside */
const homeInformation = document.createElement("address")
homeInformation.classList.add("home__information")

homeInformation.append(
    addAddressElement(
        'Address:',
        `567 Elmwood Avenue
        Suite 890
        Briarwood, CA 98765`
    ),
    addAddressElement(
        'Opening:',
        `Monday to Friday
        09:00 am - 04:00 pm`
    ),
    addAddressElement(
        'Contact:',
        `(+34)644 09 56 48
        contacto@xanderazuaje.com`
    ),
)

/**Reviews Section */
const reviewsContainer = document.createElement('footer')
reviewsContainer.classList.add('reviews')

reviewsContainer.append(
  addReview(
    "The Culinary Chronicles",
    "Tortuga is a fantastic restaurant that exceeded all of my expectations.",
    5
  ),
  addReview(
    "The Foodie Feed",
    "The food is exceptional, and I especially enjoyed the seafood dishes.",
    5
  ),
  addReview(
    "Flavor Flash",
    "The desserts are fantastic, made for a perfect ending to a wonderful meal.",
    5
  ),
)

/**Append each element to main container */
homeContainer.append(presentation, homeImage, homeInformation, reviewsContainer);

export { homeContainer as home };
