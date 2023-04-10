import { FONTS, NAV_ITEMS, HAMBURGER_MENU } from "../constants"

const navContainer = document.createElement('header');
        navContainer.classList.add('navContainer')

const nav = document.createElement('nav');
        nav.classList.add('nav')

const homeLogo = document.createElement('h1')
        homeLogo.classList.add(FONTS.title)
        homeLogo.textContent = 'Tortuga'

const pagesContainer = document.createElement('ul')
        pagesContainer.classList.add('navItems')

NAV_ITEMS.forEach(each => {
    const li = document.createElement('li')
    li.textContent = each
    li.classList.add(FONTS.smallText)

    pagesContainer.append(li)
})

nav.append(homeLogo)
nav.append(pagesContainer)
nav.append(HAMBURGER_MENU)
navContainer.append(nav)

export {navContainer as navbar}