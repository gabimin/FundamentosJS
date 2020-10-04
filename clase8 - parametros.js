// objetos pasando por parámetros

var gabi = {
  nombre: 'Gabriela',
  apellido: 'Min',
  edad: 28
}

var mabel = {
  nombre: 'Mabel',
  apellido: 'Ciap',
  edad: 30
}

/*
function cumpleanos(persona) {
  persona.edad +=1
  console.log(persona.edad+=1)
}

cumpleanos(gabi)

cumpleanos(mabel)
*/



// IMPORTANTE!

// JS se comporta distinto con los objetos. Los objetos que pasamos por parámetro se pasan por referencia

// significa que si los modificamos dentro del cuerpo de una función su valor se va a ver modificado fuera de esa función

// Podemos hacer dos cosas:

// 1) permitir este efecto colateral porque es lo que buscamos

// 2) crear un nuevo objeto, que en este caso del ejemplo debería tener todo lo mismo de la persona, excepto la edad, que debería ser un año más


//eso se puede hacer al retornar de esta función un objeto nuevo copiando todo lo que tenía el objeto anterior, desglosando a la persona dentro de este nuevo objeto cambiando alguno de los atributos,  y si quisiéramos aún podríamos crear uno nuevo

// esta función nos devuelve un nuevo objeto, una persona más vieja en este caso

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

var gabiMasVieja = cumpleanos(gabi);
var mabelMasVieja = cumpleanos(mabel);

console.log(gabiMasVieja);
console.log(mabelMasVieja);
