

//ejercicio 1 
let Nombredeusurario= prompt ("Nombre de usuario");
let edad = prompt ("edad");
let listadepeliculasfavoritas = prompt ("peliculas favoritas");

let pelisfavoritas = listadepeliculasfavoritas.split(",");

console.log ("Nombre de usuario"+ Nombredeusurario);
console.log ("edad " + edad + "años");
console.log (listadepeliculasfavoritas);

for(let i= 0; i < pelisfavoritas.length; i++ ) {
     console.log( "la pelicula '"+ pelisfavoritas [i] + " 'es una de mis favoritas");
}


//ejercicio 2 

let mayor = Number.MIN_SAFE_INTEGER; // Inicializamos con el valor mínimo seguro

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i}:`));

  if (!isNaN(numero)) { // Verificamos si el input es un número válido
    mayor = Math.max(mayor, numero);
  } else {
    alert("Por favor, ingrese un número válido.");
    i--; // Restamos 1 a i para volver a solicitar el número
  }
}

console.log(`El número mayor es: ${mayor}`);

//ejercicio 3 

if (!isNaN(segundos) && segundos > 0) {
  let contador = segundos;

  // Mostrar el mensaje y contar hacia atrás en tiempo real
  const intervalo = setInterval(function() {
    if (contador === 0) {
      console.log(`¡Hora de acostarse después de ${segundos} segundos!`);
      clearInterval(intervalo); // Detener el intervalo después de mostrar el mensaje
    } else {
      console.log(`Quedan ${contador} segundos.`);
      contador--;
    }
  }, 1000); // Intervalo de 1 segundo (1000 milisegundos)
} else {
  console.log("Por favor, ingrese una cantidad válida de segundos.");
}

