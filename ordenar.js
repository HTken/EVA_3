function ordenarNumeros(lista) {
  return lista.sort((a, b) => a - b);
}

// Prueba de la función
const numeros = [1, 5, 10, 258, 1, 0, 145];
const ordenados = ordenarNumeros(numeros);
console.log("Números ordenados:", ordenados);
