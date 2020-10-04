/*
var nombre = 'Gabriela'

function imprimirNombreEnMayusculas(nombre) {
nombre = nombre.toUpperCase();
console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);
*/


// no se puede poner así porque se estaría pisando la variable:

/*
var nombre = 'Gabriela'
var nombre = 'Mabel'
*/


// Qué se puede hacer? Una opción sería definir la variable dos veces y llamar dos veces a la función:

/*
var nombreGabriela = 'Gabriela'
var nombreMabel = 'Mabel'

imprimirNombreEnMayusculas(nombreGabriela);
imprimirNombreEnMayusculas(nombreMabel);
*/


// lo anterior funcionaría pero no es prolijo, por eso trabajamos con OBJETOS

// el objeto reúne ciertos atributos que tiene en común con otros objetos

// así podemos representar a una persona:

var gabi = {
  nombre: 'Gabriela',
  apellido: 'Min',
  edad: 28
}

// a la izquierda está la clave o 'key' (nombre) y a la derecha el valor o 'value'(Gabriela)

// la clave puede ser un número o un string

//los valores pueden ser string, números, decimales, booleanos, funciones

var mabel = {
  nombre: 'Mabel',
  apellido: 'Ciap',
  edad: 30
}


//ahora, si queremos imprimir el nombre en mayúsculas:

/*
imprimirNombreEnMayusculas(gabi.nombre);
imprimirNombreEnMayusculas(mabel.nombre);
*/


// pero podemos mejorar la función haciendo que en lugar de recibir un nombre, reciba el objeto entero como forma en la que la invocamos y sepa acceder al atributo nombre de la persona:

/*
function imprimirNombreEnMayusculas(persona) {
  var nombre = persona.nombre.toUpperCase();
  console.log(nombre);
}

imprimirNombreEnMayusculas(gabi);
imprimirNombreEnMayusculas(mabel);
*/

// hay otra forma más de hacerlo si no queremos declarar una nueva variable dentro de la función:

/*
function imprimirNombreEnMayusculas(persona) {
  console.log(persona.nombre.toUpperCase());
}

imprimirNombreEnMayusculas(gabi);
imprimirNombreEnMayusculas(mabel);
*/


// en las últimas versiones de JS hay otra manera de realizarlo: en el parámetro colocamos llaves con los atributos del objeto que nos interesan, en este caso solo el atributo 'nombre', y eliminamos 'persona'

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(gabi);
imprimirNombreEnMayusculas(mabel);


// inclusive podemos llamar a la función y definir un nuevo objeto allí mismo:

imprimirNombreEnMayusculas({ nombre: 'Pepito'})


// si invocamos a la función sin parámetros da error:

imprimirNombreEnMayusculas()

// si mandamos un objeto pero con otro atributo también va a dar error, porque el objeto que le pasamos no tiene el atributo 'nombre':

imprimirNombreEnMayusculas({ apellido: 'Gómez'})
