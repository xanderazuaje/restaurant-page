const BODY = document.querySelector("body");

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

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


const FONTS = {
  bodyFont: "bodyFont",
  title: "title",
  subTitle: "subTitle",
  smallText: "smallText",
};

const IMAGES = {
    first: "https://www.nicepng.com/png/full/54-547446_contact-us-plate-of-jamaican-food-png.png",
    second: "https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80",
    third: "https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1954&q=80"
}

const NAV_ITEMS = ["Home", "Menu", "About"];

export { BODY, HAMBURGER_MENU, FONTS, NAV_ITEMS, SVG_NAMESPACE, IMAGES };
