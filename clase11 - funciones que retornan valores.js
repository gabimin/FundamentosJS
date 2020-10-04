var gabi = {
  nombre: 'Gabi',
  apellido: 'Min',
  edad: 28,
  abogado: true,
  cocinero: false,
  cantante: false,
  dj: false,
  knitter: true,
  softdev: true
}

/*

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

*/

/*

imprimirSiEsMayorDeEdad(gabi)

*/


var juan = {
  nombre: 'Juan',
  apellido: 'Gómez',
  edad: 13
}

/*

imprimirSiEsMayorDeEdad(juan)

*/


// se puede mejorar el código, devuelve true o false:

/*

function esMayorDeEdad(persona) {
  return persona.edad >= 18
}

*/

// la función se puede reformular así

/*

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

*/

// para ser más claros, se puede definir una variable

/*
  var mayoriaDeEdad = 18
*/


// y se formula una función:

/*

function esMayorDeEdad(persona) {
  return persona.edad >= mayoriaDeEdad
}

*/


//para indicar que una variable no lo es, sino que es constante, como la mayoría de edad, la podemos definir como tal. Las constantes se escriben con mayúsculas y separadas con guiones bajos

const MAYORIA_DE_EDAD = 18


//reformulamos la función para reflejar el paso de var a const:

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }
  

imprimirSiEsMayorDeEdad(gabi)

imprimirSiEsMayorDeEdad(juan)
