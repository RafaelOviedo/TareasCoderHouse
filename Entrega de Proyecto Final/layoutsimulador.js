// Listeners
let removeCartItemBtns = document.getElementsByClassName(".remove-btn");
for (let i = 0; i < removeCartItemBtns.length; i++) {
    let button = removeCartItemBtns[i];
    button.addEventListener("click", removeCartItems);
}

let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("click", quantityChanged);
}

let addToCartButton = document.getElementsByClassName("add-to-cart-btn");
for (let i = 0; i < addToCartButton.length; i++) {
    let addButton = addToCartButton[i];
    addButton.addEventListener("click", addToCart);
}

let purchaseButton = document
    .getElementsByClassName("purchase-btn")[0]
    .addEventListener("click", purchased);

// Cambiando el estilo de la navbar en scroll
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("nav-bar");
    navbar.classList.toggle("onScroll", window.scrollY > 0);
});

//Funciones de los listeners
function removeCartItems(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updateCartTotal();
}

function addToCart(event) {
    let addButton = event.target;
    let menuItem = addButton.parentElement;
    let title = menuItem.getElementsByClassName("item-title")[0].innerText;
    let price = menuItem.getElementsByClassName("item-price")[0].innerText;
    let imageSrc = menuItem.getElementsByClassName("item-image")[0].src;
    addRowToCart(title, price, imageSrc);
    updateCartTotal();
}

function purchased() {
    let cartItems = document.getElementsByClassName("cart-box-items")[0];
    if (!cartItems.hasChildNodes()) {
        alert("Debe seleccionar al menos un elemento");
    } else {
        alert("Gracias por su compra");
    }
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

// Funcion para agregar las filas de los items al cart
function addRowToCart(title, price, imageSrc) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    let cartItems = document.getElementsByClassName("cart-box-items")[0];
    let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert("Este articulo ya ha sido elegido");
            return;
        }
    }
    let cartRowContent = `
    <div class="cart-item cart-column">
            <img
            class="cart-item-image"
            src="${imageSrc}"
        />
        <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-item-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input
                class="cart-quantity-input"
                type="number"
                value="1"
        />
            <button class="remove-btn">REMOVE</button>
    </div>`;
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow
        .getElementsByClassName("remove-btn")[0]
        .addEventListener("click", removeCartItems);
    cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener("change", quantityChanged);
}

//funcion para actualizar el cart
function updateCartTotal() {
    let cartBoxItems = document.getElementsByClassName("cart-box-items")[0];
    let cartRows = cartBoxItems.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
        let quantityElement = cartRow.getElementsByClassName(
            "cart-quantity-input"
        )[0];
        let price = priceElement.innerText.replace("$", " ");
        let quantity = quantityElement.value;
        total += price * quantity;
    }
    $(".totalPrice").text("$" + total);
}

// funcionalidad del lateral bar
function closeLateralBar() {
    $("#lateral-bar").css("width", "0px");
    $("#lateral-bar").css("border-left", "");
}

function openLateralBar() {
    $("#lateral-bar").css("width", "425px");
    $("#lateral-bar").css("borderLeft", "2px solid black");
    $("#lateral-bar").css("border-bottom", "2px solid black");
}

