const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

console.log('\nSON PRIMOS?\n')

function es_primo(num){

  if ( num <= 1 ){
    return false;
  }
  /* si llega aquí es que es 2 o mayor*/

  for(let i = 2; i < num; i++){
    if ( num % i === 0 ){
      return false;
    }

  }

  /*si logra salir del ciclo es que es primo */
  //console.log(`${num} es primo \n`)
  return true;
}

//console.log('Los que sí son primos: \n')
let son_primos = ejercicio1.filter(es_primo);
son_primos.forEach(primo => console.log(`${primo} es primo`));

console.log('\nFIESTA DE RAMIRO\n')
const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

// Probando el otro tipo de declarar funciones
//solo puedo dejar pasar a los que sean familiares y a los mayores de edad
//Solo los imprimo
const dejar_pasar = (persona) => {
  if(persona.edad >= 18 && persona.esFamiliar){
    console.log(`Puedes pasar ${persona.nombre}`)
    return true;
  }

  return false;

}

ejercicio2.forEach(persona => dejar_pasar(persona));

/* FIBONACCI */

//Imprimir los primeros 50 números de la serie fibonacci
//no se cuantas iteraciones voya a hacer entonces hago un while
  //creo que sí voy a saber cuántas veces lo haré

console.log('\nSERIE FIBONACCI\n')

const serie_fibonacci = (num) => {
  let i_fib = 2;
  let fibonacci = [0, 1];
  while( i_fib < num ){
    fibonacci.push( fibonacci[i_fib-2] + fibonacci[i_fib-1] );
    i_fib++;
  }

  return fibonacci;
}

let fib = serie_fibonacci(50);
fib.forEach( f_num => console.log(`${f_num} es F`));
