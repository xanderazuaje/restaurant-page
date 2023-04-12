import { FONTS } from "../constants";
import { addMenuCard } from "../functions";

const menuContainer = document.createElement('section')
menuContainer.id = "menu"

menuContainer.append(
    addMenuCard("Appetitizers",
        [
            {name: "Island Starters",
            description: "Conch fritters served with a tangy dipping sauce",
            price: 10},

            {name: "Caribbean Bite",
            description: "Jamaican beef patties with a flaky crust and spicy filling",
            price: 8},

            {name: "Tropi-Tizers",
            description: "Fried plantains with a mango salsa on top",
            price: 7},

            {name: "Seaside Snacks",
            description: "Fried plantains with a mango salsa on top",
            price: 12},
        ]),

    addMenuCard("Entrees",
        [
            {name: "Island Mains",
            description: "Jerk chicken with rice and beans and a side of fried plantains",
            price: 18},

            {name: "Caribbean Classics",
            description: "Grilled fish with a coconut curry sauce, served with steamed vegetables and rice",
            price: 22},

            {name: "Tropi-Entrees",
            description: "Spicy shrimp and grits with peppers and onions",
            price: 20},

            {name: "Seaside Specialities",
            description: "Goat curry with fragrant spices and potatoes, served with rice and peas",
            price: 24},
        ]),
    addMenuCard("Sides",
        [
            {name: "Island Sides",
            description: "Caribbean-style rice and peas",
            price: 5},

            {name: "Caribbean Sides",
            description: "Fried plantains",
            price: 4},

            {name: "Tropi-Sides",
            description: "Sweet potato fries witth a honey-lime dip",
            price: 6},

            {name: "Seaside Sides",
            description: "Coconut coleslaw",
            price: 5},
        ]),

    addMenuCard("Sides",
        [
            {name: "Island Sides",
            description: "Caribbean-style rice and peas",
            price: 5},

            {name: "Caribbean Sides",
            description: "Fried plantains",
            price: 4},

            {name: "Tropi-Sides",
            description: "Sweet potato fries witth a honey-lime dip",
            price: 6},

            {name: "Seaside Sides",
            description: "Coconut coleslaw",
            price: 5},
        ]),

    addMenuCard("Desserts",
        [
            {name: "Island Sweets",
            description: "Key lime pie with a graham cracker crust",
            price: 8},

            {name: "Caribbean Confections",
            description: "Pineapple upside-down cake with rum caramel sauce",
            price: 9},

            {name: "Tropi-Treats",
            description: "Coconut rice pudding with a mango compote on top",
            price: 7},

            {name: "Seaside Sweets",
            description: "Chocolate rum cake with whipped cream",
            price: 10},
        ]),

    addMenuCard("Drinks",
        [
            {name: "Island Libations",
            description: "Rum punch made with tropical fruit juices and rum",
            price: 10},

            {name: "Caribbean Cocktail",
            description: "Mai Tai with rum, lime juice and orange liqueur",
            price: 12},

            {name: "Tropi-Drinks",
            description: "Mango margarita made with fresh mango puree and tequila",
            price: 11},

            {name: "Seaside Spirits",
            description: "Coconut water served straight up or mixed with rum",
            price: 10},
        ]),
)


export {menuContainer as menu}
