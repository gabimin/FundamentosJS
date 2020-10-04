// Las estructuras de control permiten decidir el flujo del código

//Empezaremos con los condicionales, que permiten decidir si el código se ejecuta o no

var gabi = {
  nombre: 'Gabi',
  apellido: 'Min',
  edad: 28,
  abogado: true,
  cocinero: false,
  cantante: false,
  dj: false,
  knitter: true,
  softdev: true
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)

// imprime las profesiones true

  if (persona.abogado) {
    console.log('abogado')
  }

  if (persona.cocinero) {
    console.log('cocinero')
  }

    if (persona.dj) {
    console.log('dj')
  }
  if (persona.knitter) {
    console.log('knitter')
  }
  if (persona.softdev) {
    console.log('softdev')
  }

//si queremos decir si realiza o no cada una de las profesiones

  if (persona.cantante) {
    console.log('cantante')
  } else {
    console.log('no es cantante')
  }
}

imprimirProfesiones(gabi)


//Ejercicio:

function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${ persona.nombre} es mayor de edad.`)
  } else {console.log(`${ persona.nombre } es menor de edad.`)
    }
  }

imprimirSiEsMayorDeEdad(gabi)
