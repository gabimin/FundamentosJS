//Las funciones son trozos de codigo reutilizables

//function y var son palabras reservadas de JS

//Para declarar una funcion se emplea la palabra reservada function

// sintaxis:

// function nombreFuncion (parametros)
// {
//    cuerpo de la función (código reutilizable)
// }

//una función puede llevar o no parámetros

var nombre = 'Gabi', edad = 28;

function imprimirEdad() {
  console.log(`${nombre} tiene ${edad} años`);
}

//llamar a la función:

imprimirEdad();


//reutilizar el código: hacer que la función acepte parámetros

//cómo? en los paréntesis le decimos qué variables va a recibir al llamar a la función

function imprimirEdad(n,e) {
  console.log(`${n} tiene ${e} años`);
}

imprimirEdad(nombre, edad);

// si bien pasamos las var nombre y edad al llamar a la función, dentro de la función se llaman n y e

// entonces podemos reutilizar el código dentr de la función:

imprimirEdad("Vicky", 30);
imprimirEdad("Erick", 24);


// Ojo!! si ponemos los parámetros invertidos o no pasamos parámetros JS igual va a tratar de ejecutar el código, pero van a existir errores:

imprimirEdad(30, "Vicky");
imprimirEdad();
imprimirEdad("Vicky");
