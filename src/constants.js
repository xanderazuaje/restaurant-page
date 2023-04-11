const BODY = document.querySelector("body");

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const STAR_PATH = "M9.54894 0.927049C9.8483 0.00573857 11.1517 0.00574037 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
const STAR_COLOR = "#C56B6B"

const HAMBURGER_MENU = document.createElementNS(SVG_NAMESPACE, "svg");
    HAMBURGER_MENU.setAttribute("class", "hamburgerMenu")
    HAMBURGER_MENU.setAttribute("viewBox", "0 0 100 80")
    HAMBURGER_MENU.setAttribute("width", "40")
    HAMBURGER_MENU.setAttribute("height", "40")
const rectangle1 = document.createElementNS(SVG_NAMESPACE, "rect")
    rectangle1.setAttribute("width", 100)
    rectangle1.setAttribute("height", 12)
    rectangle1.setAttribute("fill", "currentColor")
const rectangle2 = document.createElementNS(SVG_NAMESPACE, "rect")
    rectangle2.setAttribute("y", 30)
    rectangle2.setAttribute("width", 100)
    rectangle2.setAttribute("height", 12)
    rectangle2.setAttribute("fill", "currentColor")
const rectangle3 = document.createElementNS(SVG_NAMESPACE, "rect")
    rectangle3.setAttribute("y", 60)
    rectangle3.setAttribute("width", 100)
    rectangle3.setAttribute("height", 12)
    rectangle3.setAttribute("fill", "currentColor")
HAMBURGER_MENU.append(rectangle1, rectangle2, rectangle3)

const STAR_SVG = document.createElementNS(SVG_NAMESPACE, "svg")
    STAR_SVG.setAttribute("width", "21")
    STAR_SVG.setAttribute("height", "19")
    STAR_SVG.setAttribute("viewBox", "0 0 21 19")
    STAR_SVG.setAttribute("fill", "none")
    STAR_SVG.setAttribute("xmlns", SVG_NAMESPACE)
const starShape = document.createElementNS(SVG_NAMESPACE, "path")
    starShape.setAttribute("d", STAR_PATH)
    starShape.setAttribute("fill", STAR_COLOR)

const FONTS = {
  bodyFont: "bodyFont",
  title: "title",
  subTitle: "subTitle",
  smallText: "smallText",
};

const NAV_ITEMS = ["Home", "Menu", "About"];

export { BODY, HAMBURGER_MENU, FONTS, NAV_ITEMS };
