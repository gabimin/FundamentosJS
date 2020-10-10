// Otra estructura repetitiva es el DO WHILE

// Se diferencia del WHILE en que ejecuta al menos una vez el código antes de que se evalúe la expresión condicional


var contador = 0

const LLUEVE = () => Math.random() < 0.25

do {
  contador ++
} while (!LLUEVE())

// Se escribe: DO, el código entre llaves, WHILE y la condición entre paréntesis
// la condición está después del código, por eso la condición se ejecuta al menos una vez

if (contador < 2) {
console.log(`Fui a ver si llovía una vez.`)
} else {
console.log(`Fui a ver si llovía ${contador} veces.`)}
