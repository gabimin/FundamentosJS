// Alcance de las funciones: a qué variables pueden acceder y qué valores van a tener esas variables al momento de invocar a una función

var nombre = 'Gabriela';

// si una variable, como nombre, no está definida dentro del cuerpo de una función se dice que es de alcance global y por eso se puede acceder desde cualquier función

// al definirla arriba y afuera de cualquier función esa variable se asigna al objeto global

// objeto global: depende de dónde estamos ejecutando JS. Si lo estamos ejecutando en un servidor sería en el entorno de nodeJS y si lo estamos ejecutando en el browser el objeto global es window (la ventana) = window.nombre

/*

function imprimirNombreEnMayusculas() {
nombre = nombre.toUpperCase();
console.log(nombre);
}

imprimirNombreEnMayusculas()

*/


//al llamar a la variable global, esta función está teniendo un efecto colateral o side effect: al invocar la función ésta también va a modificar variables que no están definidas dentro de ellas. Esto hay que evitarlo dentro de nuestro código

//Cómo se puede mejorar lo anterior y no modificar la variable global? Así:

/*

function imprimirNombreEnMayusculas(n) {
   n = n.toUpperCase();
  console.log(n);
}

imprimirNombreEnMayusculas(nombre)

*/


// la variable n dentro de la función tiene un alcance local, no podemos acceder a ella desde afuera porque ese valor es undefined

// en la función anterior el valor de nombre reemplaza al valor de parámetro n haciendo que el efecto colateral deje de existir porque sólo estamos modificando la variable local n pero no la global nombre


//también podemos hacer que, al poner la misma variable global entre paréntesis como parámetro, la transformemos en variable local. Entonces, al referirnos a "nombre" dentro de la función nos estamos refiriendo a la variable local, a menos que pongamos window.nombre dentro esa función, lo que sería referirnos a la variable global dentro de la función.

function imprimirNombreEnMayusculas(nombre) {
nombre = nombre.toUpperCase();
console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);

console.log(nombre)

// la variable global no se modifica

// conclusión: toda variable que no esté definida dentro de una función va a estar definida dentro del alcance global y vamos a poder acceder a ella a través del objeto global, en el caso del navegador es window
