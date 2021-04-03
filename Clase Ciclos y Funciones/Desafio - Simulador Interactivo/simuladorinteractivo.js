//-----------------------------------------
// MUESTRA MENSAJE BIENVENIDA
//-----------------------------------------

alert("Bienvenido, que pizza deseas elegir?");

//-----------------------------------------
// VARIABLES DE PRODUCTOS
//-----------------------------------------

let pizzas = [
    { name: "mozzarella", price: 490 },
    { name: "napo", price: 530 },
    { name: "fugazzeta", price: 500 },
    { name: "jamon", price: 530 },
];

let bebidas = [
    { name: "coca lata", price: 50 },
    { name: "coca botella", price: 80 },
    { name: "fanta lata", price: 50 },
    { name: "7up lata", price: 50 },
    { name: "agua", price: 70 },
];

//-----------------------------------------------
// HACIENDO UN PEDIDO
//-----------------------------------------------
let pizzaElegida;
let bebidaElegida;

function eleccionPizza() {
    // el for itera en el array pizzas y muestra todos los items
    for (let i = 0; i < pizzas.length; i++) {
        alert(`Las pizzas disponibles son: 
                
                ${pizzas[i].name} ${pizzas[i].price}$
                
    Cual elegis?`);
    }

    // se elige un producto y te muestra dicha eleccion
    let eleccionDePizza = prompt("Que pizza vas a elegir?");
    for (let i = 0; i < pizzas.length; i++) {
        if (eleccionDePizza === pizzas[i].name) {
            pizzaElegida = pizzas[i];
            alert(`Tu eleccion ha sido: ${pizzas[i].name} ${pizzas[i].price}$`);
        }
    }
}

function eleccionBebida() {
    // esta vez el for itera en el array de bebidas
    // te pregunta si quieres algo para tomar, si elijes si, te muestra los productos y
    // si elijes no, te muestra el total de tu pedido hasta ese momento
    let siOno = prompt("Queres algo para tomar?");
    if (siOno === "si") {
        for (let i = 0; i < bebidas.length; i++) {
            alert(`Las bebidas disponibles son: 
                
                ${bebidas[i].name} ${bebidas[i].price}$
                
    Cual elegis?`);
        }

        // luego de elejir el producto te muestra dicha eleccion
        let eleccionDeBebida = prompt("Que bebida vas a elegir?");
        for (let i = 0; i < bebidas.length; i++) {
            if (bebidas[i].name === eleccionDeBebida) {
                bebidaElegida = bebidas[i];
                alert(
                    `Tu eleccion ha sido: ${bebidas[i].name} ${bebidas[i].price}$`
                );
            }
        }
    } else if (siOno === "no") {
        alert(`El total de tu pedido son: ${pizzaElegida.price}$`);
        alert(`Gracias por su compra!`);
    }
}

function totalPedido() {
    // suma los productos elegidos y da el total
    let total = pizzaElegida.price + bebidaElegida.price;
    alert(`El total de tu pedido son: ${total}$
    Gracias por su compra!`);
}

eleccionPizza();
eleccionBebida();
totalPedido();
