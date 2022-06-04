// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let mayuscula = nombre.charAt().toUpperCase() + nombre.slice(1);
  return mayuscula;
}                //charAt()toma una letra /toUpperCase(pasa a mayuscula)/ .slice(([i]inicio)([i]fin))

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

  return cb();

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2,);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = numeros.reduce(function (acc, elemento) {
    return acc + elemento;
  })
  cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(element => {
    cb(element)
  });


}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código: //map es lo mismo que un forEach recibe siempre una funcion y un elemento que va a ser el cual
  // se va a iterar/ luego elreturn es lo que va a hacer la funcion map en cada iteracion.map aplica la funcion a c/u 
  //los elementos de un arreglo/*
  var nuevoarray = array.map(function (element) {
    return cb(element)
  });
  return nuevoarray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código://filter devuelve un nuevo array de igual o menor tamaño que el anterior(sin modificarlo)
  // llamo x al elemento utilizo una arrow funtion y declaro que va a hacer. en este caso x en su indice 0 tiene
  //que ser igual a "a". al declarar la variable al principio ya estoy asignandole los uuevos elementosdel array.
  let sinA = array.filter(x => x[0] === "a");
  return sinA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
