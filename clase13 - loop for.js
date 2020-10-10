// Una de las estructuras básicas de control, REPETITIVA, el bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

//Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves ==>> for( ){ }

//En este ejemplo la variable i la utilizamos como contador.

var gabi = {
  nombre: 'Gabi',
  peso: 65
}

console.log(`Al inicio del año ${gabi.nombre} pesa ${gabi.peso} kg.`)

const VARIACION_PESO = .2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += VARIACION_PESO
const adelgazar = persona => persona.peso -= VARIACION_PESO

// lo anterior es una arrow function, que es lo mismo que escribir la siguiente función:
/*
function aumentarDePeso(persona) {
return persona.peso +=200
}
*/

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    aumentarDePeso(gabi)
  } else if (random < 0.5){
    adelgazar(gabi)
  }
}

// el for entre paréntesis va a tener 3 partes:
// 1) la parte inicial
// 2) la parte de la condición que debe cumplirse para que se ejecute el código que está entre las llaves
// 3) la parte del incremento
// las tres partes se separan obligatoriamente con ';'

// entre las llaves va el código que queremos que se repita

// para llevar la cuenta de las veces que se ejecuta el código usamos un contador, que dentro de un ciclo for generalmente se llama 'i'


console.log(`Al final del año ${gabi.nombre} pesa ${gabi.peso.toFixed(1)} kg.`)

//la función .toFixed(n) es para límitar el número de dígitos mostrados
