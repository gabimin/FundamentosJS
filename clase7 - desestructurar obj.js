// Otra forma de acceder a los objetos es la desestructurazión de los mismos

var gabi = {
  nombre: 'Gabriela',
  apellido: 'Min',
  edad: 28
}

var mabel = {
  nombre: 'Mabel',
  apellido: 'Ciap',
  edad: 30
}

// De esta manera estamos diciendo que vamos a declarar la variable 'nombre' que va a salir de persona.nombre

/*
function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre; (es lo mismo que lo de abajo)
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(gabi);
imprimirNombreEnMayusculas(mabel);
*/


// Ejercicio:

//Opción 1:

function imprimirNombreYEdad(persona) {
  var { nombre, edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirNombreYEdad(gabi)
imprimirNombreYEdad(mabel)

// Opción 2 (más corta):

function imprimirNombreYEdad2(persona) {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`)
}

imprimirNombreYEdad2(gabi)
imprimirNombreYEdad2(mabel)
