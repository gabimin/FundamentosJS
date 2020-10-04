// Arrow Functions permiten una nomenclatura más corta para escribir funciones.

// Este tipo de funciones deben definirse antes de ser utilizadas.

// Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

// El proceso es el siguiente:

/*

var gabi = {
  nombre: 'Gabi',
  apellido: 'Min',
  edad: 28,
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gómez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

*/


// En JS podemos asignar a una constante una función y luego invocarla
// Al sacarle el nombre ahora esta es una función anónima, no tiene un nombre, pero la asignamos a una constante que sí tiene un nombre

/*

const ES_MAYOR_DE_EDAD = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (ES_MAYOR_DE_EDAD(persona)) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

imprimirSiEsMayorDeEdad(gabi)

imprimirSiEsMayorDeEdad(juan)

*/


// otra forma de escribir esto es con un ARROW Function

// podemos borrar la palabra FUNCTION y poner una flecha con un igual y un símbolo de mayor, en principio funciona de la misma manera y queda así:

/*

const ES_MAYOR_DE_EDAD = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD
}

*/

// si queremos, podemos seguir ahorrando caracteres: cuando tenemos un sólo parámetro en la función podemos obviar los paréntesis

/*

const ES_MAYOR_DE_EDAD = persona => {
  return persona.edad >= MAYORIA_DE_EDAD
}

*/


//cuando leemos como arriba una variable seguida de una flecha es una función seguida del cuerpo de la función entre las llaves


// pero podemos seguir sacando cosas

// JS permite que si lo único que hace una función es retornar algo podemos borrar return y las llaves que rodean el cuerpo de la función, queda en una sola línea:

/*

const ES_MAYOR_DE_EDAD = persona => persona.edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
  if (ES_MAYOR_DE_EDAD(persona)) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

imprimirSiEsMayorDeEdad(gabi)

imprimirSiEsMayorDeEdad(juan)

*/


// como sólo nos interesa la edad de la persona, podemos desestructurar el parámetro, no podemos poner las llaves directamente sino paréntesis, las llaves y el parámetro 'edad'

/*

const ES_MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona) {
  if (ES_MAYOR_DE_EDAD(persona)) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

imprimirSiEsMayorDeEdad(gabi)

imprimirSiEsMayorDeEdad(juan)

*/


// función que no permite el acceso si no tiene mayoría de edad

/*

function permitirAcceso(persona) {
  if (!ES_MAYOR_DE_EDAD(persona)) {
    console.log('Acceso denegado')
  }
}

permitirAcceso(gabi)
permitirAcceso(juan)

*/


// Ejercicio: escribir la función es menor de edad como arrow function y que retorne la negación de la llamada a es mayor de edad


var juan = {
  nombre: 'Juan',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

const ES_MENOR_DE_EDAD = ({ edad }) => edad < MAYORIA_DE_EDAD

function EsMayorDeEdad(persona) {
  if (ES_MENOR_DE_EDAD(persona)){
    console.log(`${persona.nombre} no es mayor de edad.`)
  }
  }

EsMayorDeEdad(juan)
