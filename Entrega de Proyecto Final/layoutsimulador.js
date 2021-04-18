// Variables de productos

let pizzas = [
    { name: "muzzarella", price: 490 },
    { name: "napolitana", price: 530 },
    { name: "fugazzeta", price: 500 },
    { name: "jamon y morron", price: 530 },
];

let hamburguesas = [
    { name: "simple", price: 420 },
    { name: "doble", price: 490 },
    { name: "cheddar", price: 550 },
    { name: "doble cheddar", price: 610 },
];

let bebidas = [
    { name: "coca lata", price: 60 },
    { name: "7up lata", price: 60 },
    { name: "fanta lata", price: 60 },
    { name: "pepsi lata", price: 60 },
];

// Cambiando el estilo de la navbar en scroll

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav-bar");
    navbar.classList.toggle("onScroll", window.scrollY > 0);
});

// funcionalidad del lateral bar

function closeLateralBar() {
    document.getElementById("lateral-bar").style.width = "0px";
    document.getElementById("lateral-bar").style.borderLeft = "";
}

function openLateralBar() {
    document.getElementById("lateral-bar").style.width = "400px";
    document.getElementById("lateral-bar").style.borderLeft = "2px solid black";
    document.getElementById("lateral-bar").style.borderBottom =
        "2px solid black";
}

// contador de carrito en click de producto

// let cartBtn = document.getElementById("cart-btn");
