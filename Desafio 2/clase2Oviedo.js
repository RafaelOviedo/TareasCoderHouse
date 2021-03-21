let welcome = alert("Elegi 2 de estos 3 colores: Amarillo, azul, rojo")

let color1 = prompt("Ingresa tu primer color");
alert("Color elegido: " + color1);

let color2 = prompt("Ingresa tu segundo color");
alert("Color elegido: " + color2);

alert("Los colores elegidos son: " + color1 + " " + "y" + " " + color2);

let preguntaMezcla = prompt("Queres saber el resultado de mezclar estos dos colores?");
let mensajeAdios = "Hasta luego!"
let mezclaAmarilloYRojo = "naranja";
let mezclaAmarilloYAzul = "verde";
let mezclaAzulYRojo = "violeta";

if (preguntaMezcla === "si") {
        if (color1 === "amarillo" && color2 === "azul" || color2 === "amarillo" && color1 === "azul") {
			alert("La mezcla es verde");

      } else if (color1 === "amarillo" && color2 === "rojo" || color2 === "amarillo" && color1 === "rojo") {
		    alert("La mezcla es naranja");

	  } else {
		  alert("La mezcla es violeta");
	  };
} else {
	alert(mensajeAdios);
}
