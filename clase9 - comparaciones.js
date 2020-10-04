/* Existen cinco tipos de datos primitivos:

Boolean:  false/true
Null:  nulo o "vacío"
Undefined: Cuando una variable es declarada pero aún no tiene un valor asignado
Number: 383839
String: "esto es una string"

*/

var x = 4, y = "4";

/*
En el caso de datos primitivos:

== compara dos variables y puede dar true aunque sean de distintos tipos. Ej:

4 == '4' ==> true

=== compara dos variables para que sean del mismo valor y del mismo tipo. Ej:

4 === '4'  ==> false

Siempre conviene utilizar ===

*/

// En el caso de objetos:

/*

var gabi = {
  nombre: 'Gabi'
}

var otraPersona = {
  nombre: 'Gabi'
}

*/

// gabi == otraPersona >>> false

// Pero si:

var gabi = {
  nombre: 'Gabi'
}

var otraPersona = gabi

// gabi == otraPersona >>> true

// porque son el mismo objeto en memoria ram


//Pero si desglosamos el objeto en un nuevo objeto, lo que se llama un objeto literal:

/*

var gabi = {
  nombre: 'Gabi'
}

var otraPersona = {
  ...gabi
}

*/

//  otraPersona == gabi  >>> esto nos va a seguir dando false ya que estamos creando un nuevo objeto, aunque estemos desglosando los atributos de 'gabi', es otro lugar en memoria ram


var gabi = {
  nombre: 'Gabi'
}
var otraPersona = gabi
otraPersona.nombre = 'Pepe'

gabi.nombre // también va a ser igual a 'Pepe'

//porque 'otraPersona' y 'gabi' apuntan al mismo lugar de memoria ram

// si lo hacemos como antes, ya no porque es otro lugar en memoria ram, es otro objeto distinto aunque tienen los mismos valores apuntan a distintas direcciones en memoria ram


var gabi = {
  nombre: 'Gabi'
}

var otraPersona = {
  nombre: 'Gabi'
}
