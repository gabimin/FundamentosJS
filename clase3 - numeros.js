
// aumento de una variable numérica

var edad = 27;

// edad = edad + 1  >> significa lo mismo que:

edad += 1


//disminución de una variable numérica

var peso = 65

// peso = peso - 2  >> significa lo mismo que:

peso -= 2


// sumar dos números distintos

var sandwich = 1

// peso = peso + sandwich >> es lo mismo que:

peso += sandwich


var jugarAlFutbol = 3

// peso = peso - jugarAlFutbol >> es lo mismo que:

peso -= jugarAlFutbol


// ejemplo con decimales
// a menos que se trabaje con librerías externas la manera de almacenar decimales de JS no es precisa

var precioDeVino = 200.3

var total = precioDeVino * 3


// para solucionar el problema (si sabemos que tiene un solo decimal):

var total = precioDeVino * 100 * 3 / 100


// si no estamos seguros tenemos que hacer una cuenta más compleja:

var total = Math.round(precioDeVino * 100 * 3) / 100


//para pasar a string y obtener dos decimales (o los que sea) después de la coma:

var totalStr = total.toFixed(3)


// para pasar a números decimales (parse=pasar a números, float=decimales o punto flotante)

var total2 = parseFloat(totalStr)


//como hacer una división

var pizza = 8

var persona = 2

var cantidadDePorcionesPersona = pizza / persona


// Particularidad de JS: números decimales __ recordar!
