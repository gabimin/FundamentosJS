//concatenar string de texto y variable
console.log("hola " + nombre);

var nombre = 'Gabi';
var apellido = 'Min';

console.log("hola " + nombre + ' ' + apellido);


// se pueden declarar varias variables en una línea
var nombre = 'Gabi', apellido = 'Min';


// JS es un lenguaje débilmente tipado: no hay nada que diga que la variable tenga que ser string. Nada nos impide mandar una variable de otro tipo.

var edad = 28;

console.log('Tengo ' + edad + " años");

edad = '28 años';

console.log('tengo ' + edad);

var peso = '65';

console.log(peso);

peso = '65 kg';

console.log(peso);


//convertir nombre en mayúsculas y apellido en minúsculas (funciones)

var nombreEnMayusculas = nombre.toUpperCase();

var apellidoEnMinuscula = apellido.toLowerCase();


//saber cual es el primer caracter de un string (función)

var primeraLetraDelNombre = nombre.charAt(0);


//saber cuantos caracteres tiene un string (atributo length)

var cantidadDeLetrasDelNombre = nombre.length;

// concatenar dos strings

var nombreCompleto = nombre + ' ' + apellido;


// interpolación de texto

// IMPORTANTE : PONER ACENTO PARA ATRAS (alt Gr y cierre llave) en lugar de comillas

var nombreCompleto = `${nombre} ${apellido}`;


// dentro de las llaves se puede escribir código completo

var nombreCompleto = `${nombre.toLowerCase()} ${apellido.toUpperCase()}`;


// acceder a un substring o a un string más pequeño (ej: dos caracteres), el primer lugar es cero

var str = nombre.charAt(1) + nombre.charAt(2);


//acceder a dos o más caracteres corridos (el primero marca la posición -incluida- y el segundo el nro. de car.)

var str = nombre.substr(1, 2);


// acceder a la última ultima Letra (con números negativos JS cuenta de adelante para atrás)

var nombre = 'Gabi'
var ultimaLetra = nombre.substr(-1)
