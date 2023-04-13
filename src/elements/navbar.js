import { FONTS, NAV_ITEMS, HAMBURGER_MENU, BODY } from "../constants"
import { addTitle } from "../functions";
import { about } from "../pages/about"
import { home } from "../pages/home"
import { menu } from "../pages/menu"

const navContainer = document.createElement('header');
        navContainer.classList.add('navContainer')

const nav = document.createElement('nav');
        nav.classList.add('nav')

const homeLogo = addTitle("Tortuga")

const pagesContainer = document.createElement('ul')
        pagesContainer.classList.add('navItems')

NAV_ITEMS.forEach(each => {
    const li = document.createElement('li')
    li.classList.add('menuElement')
    li.id = each
    li.textContent = each
    li.classList.add(FONTS.smallText)

    pagesContainer.append(li)
})

nav.append(homeLogo)
nav.append(pagesContainer)
nav.append(HAMBURGER_MENU)
navContainer.append(nav)


nav.querySelector("#Home").classList.add('clickedElement')

const menuElement = Array.from(navContainer.querySelectorAll(".menuElement"))

menuElement.forEach(each => {
    each.addEventListener('click', (e)=>{
        const element = e.target

    menuElement.forEach(each => each.classList.remove('clickedElement'))
    element.classList.add('clickedElement')

    switch (e.target.id) {
        case "Home":
            BODY.lastChild.remove()
            BODY.append(home)
            break;

        case "Menu":
            BODY.lastChild.remove()
            BODY.append(menu)
            break;

        case "About":
            BODY.lastChild.remove()
            BODY.append(about)
            break;
            }
    })
})

export {navContainer as navbar}
