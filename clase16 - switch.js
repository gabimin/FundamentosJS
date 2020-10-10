// Condicional múltiple:
/*
 switch (expression) {
  case expression:

    break;
  default:

}
*/

// La función prompt espera una respuesta del usuario que nos devuelve un valor y lo lleva a minúsculas y le quita los espacios de más

var signo = prompt(`¿Cuál es tu signo?`).toLowerCase().trim()

// Elimina los acentos y eñes de una cadena utilizando la función replace

var reemplazarAcentos = function(cadena) {
	var chars = {
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"
    }
	var expr = /[áàéèíìóòúùñ]/ig;
	var res = cadena.replace(expr,function(e){return chars[e]});
	return res;
}

signo = reemplazarAcentos(signo)


// cuando tenemos muchos if de acuerdo a una variable que siempre estamos comparando es cuando podemos utilizar un switch


switch (signo) {
  case 'aries':
    console.log(`Transitará un excelente momento para poner todo su esfuerzo y apostar a las cosas materiales con las que siempre soñó. Gracias a su inteligencia lo conseguirá. `)
    break
  case 'tauro':
    console.log(`Ponga todo su entusiasmo para poder concretar las metas. Ante todo, deberá tener en claro qué es lo que quiere realmente y esforzarse por conseguirlo. `)
    break
  case 'geminis':
    console.log(`Deje de cometer siempre el mismo error al desvalorizarse continuamente. Aunque usted no lo vea, sus méritos son muy bien reconocidos por la gente que lo rodea. `)
    break
  case 'cancer':
    console.log(`Momento oportuno para que empiece a creer en su imaginación, la cual será indispensable para resolver cualquiera de los inconvenientes que aparezcan. `)
    break
  case 'leo':
    console.log(`Después de tantos inconvenientes, sería óptimo que organice adecuadamente su vida personal. Haga los cambios que crea necesarios comenzando por su hogar. `)
    break
  case 'virgo':
    console.log(`No quiera volver a vivir sus viejas historias, intente abandonar su pasado. Comience a sobrellevar el presente de otra manera y se sentirá menos angustiado. `)
    break
  case 'libra':
    console.log(`Prepárese, ya que será una excelente jornada para concretar esos proyectos pendiente que hace tiempo tiene y se le dificultó alcanzar por su irresponsabilidad. `)
    break
  case 'escorpio':
    console.log(`Transitará un día fuera de lo común donde podrá aplicar su lado más perceptivo y libre. Haga lo que haga, se sentirá espléndido. Nadie podrá opacarlo. `)
    break
  case 'sagitario':
    console.log(`Será una jornada donde se enfrentará con demasiadas opciones y tendrá que decidir la más conveniente. Relájese y espere a mañana para la determinación. `)
    break
  case 'capricornio':
    console.log(`Sepa que hoy despertará con mucha energía y con ganas de encontrar la felicidad después de tanto sufrimiento. Aproveche que se sentirá más jovial que nunca. `)
    break
  case 'acuario':
    console.log(`Antes de avanzar, primero deberá tener en claro a dónde quiere llegar. Sepa que contará con el empuje necesario para conquistar todo lo que desee. `)
    break
  case 'piscis':
    console.log(`Si usted pretende cumplir con todos los objetivos, debería poner más entusiasmo en lo que hace. Evite relajarse, ya que podría perder cualquier oportunidad. `)
    break
  default:
    console.log(`No es un signo zodiacal válido.`)
    break
}

// la forma de utilizarlo es poner la palabra SWITCH, entre paréntesis poner la variable, después abrimos llaves donde vamos a ir poniendo cada uno de los casos luego de la palabra CASE seguida de la opción

// cuando coincida la variable se pone el código que se ejecuta hasta la palabra BREAK

// DEFAULT el caso default se ejecuta si no se cumple ninguna de las condiciones anteriores
