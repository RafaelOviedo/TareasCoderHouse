//-----------------------------------------
// MUESTRA MENSAJE BIENVENIDA
//-----------------------------------------
let welcome = prompt("Para crear su pedido escriba 'comenzar'");

let pizzasOhambur = alert("Bienvenido, que pizza deseas elegir?");

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

// el for itera en el array pizzas y muestra todos los items
function muestraPizzas() {
    for (let i = 0; i < pizzas.length; i++) {
        alert(`Las pizzas disponibles son: 
                
                ${pizzas[i].name} 
                
    Cual elegis?`);
    }

    // se elige un producto y te muestra dicha eleccion
    let pizzaOHamburElegida = prompt("Que pizza vas a elegir?");
    if (
        pizzaOHamburElegida === "mozzarella" ||
        pizzaOHamburElegida === "napo" ||
        pizzaOHamburElegida === "fugazzeta" ||
        pizzaOHamburElegida === "jamon"
    ) {
        alert(`Tu eleccion ha sido: ${pizzaOHamburElegida}`);
    }

    // esta vez el for itera en el array de bebidas
    // te pregunta si quieres algo para tomar, si elijes si, te muestra los productos y
    // si elijes no, te muestra el total de tu pedido hasta ese momento
    let eleccionDeBebida = prompt("Queres algo para tomar?");
    for (let i = 0; i < bebidas.length; i++) {
        if (eleccionDeBebida === "si") {
            alert(`Las bebidas disponibles son: 
                
                ${bebidas[i].name} 
                
    Cual elegis?`);
        } else if (
            eleccionDeBebida === "no" &&
            pizzaOHamburElegida === pizzas[i].name
        ) {
            alert(`El total de tu pedido son: ${pizzas[i].price}`);
            alert(`Gracias por su compra!`);
            continue;
        }
    }

    // luego de elejir el producto te muestra dicha eleccion
    var bebidaElegida = prompt("Que bebida vas a elegir?");
    if (
        bebidaElegida === "coca lata" ||
        bebidaElegida === "coca botella" ||
        bebidaElegida === "fanta lata" ||
        bebidaElegida === "7up lata" ||
        bebidaElegida === "agua"
    ) {
        alert(`Tu eleccion ha sido: ${bebidaElegida}`);
    }

    // al final del pedido, se muestra el resultado del precio final de los productos elegidos
    let valorTotal = 0;
    for (let i = 0; i < pizzas.length; i++) {
        for (let j = 0; j < bebidas.length; j++) {
            if (
                pizzaOHamburElegida === pizzas[i].name &&
                bebidaElegida === bebidas[j].name
            ) {
                valorTotal = pizzas[i].price + bebidas[j].price;
                alert(`El total de tu pedido es ${valorTotal}`);
                alert(`Gracias por su compra!`);
            }
        }
    }
}

muestraPizzas();
