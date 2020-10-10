// While, otra estructura repetitiva, se ejecuta únicamente mientras la condición que se está evaluando sea verdadera.

// En ocasiones nuestro código puede fallar por errores de sintaxis o errores lógicos. En caso de que quieras verificar tu código, debes utilizar 'debugger' en cualquier lugar del código. El código se detiene cada vez que lee esta palabra.


var gabi = {
  nombre: 'Gabi',
  peso: 65
}

console.log(`Al inicio del año ${gabi.nombre} pesa ${gabi.peso} kg.`)

const VARIACION_PESO = .3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += VARIACION_PESO
const adelgazar = persona => persona.peso -= VARIACION_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = gabi.peso - 3
var dias = 0


while (gabi.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(gabi)
  }
  if (realizaDeporte()) {
    adelgazar(gabi)
  }
  dias += 1
}

// while se escribe con paréntesis (condición) y llaves (código)
// el código que está entre llaves se va repetir siempre que la condición que está entre paréntesis sea verdadera o se cumpla
// recién cuando la condición sea falsa continúa la ejecución del programa

console.log(`Pasaron ${dias} días hasta que ${gabi.nombre} adelgazó 3 kg.`)
