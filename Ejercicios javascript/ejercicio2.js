/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */


function doubleNumbers() {
    let numbers = [1, 2, 4, 5];
    let double = numbers.map(function(x) {
      return x * 2;
    });
    return double; // Devolver el array con los números duplicados
  }
  
  // Obtener el botón del ejercicio 2
  const ejercicio2Btn = document.getElementById("ejercicio2-btn");
  
  // Agregar un event listener para llamar a la función cuando se haga clic en el botón
  ejercicio2Btn.addEventListener("click", function() {
      // Llamar a la función para obtener el array con los números duplicados y mostrarlo en el contenedor de resultados
      document.getElementById("resultado-container").innerText = doubleNumbers().join(", ");
  });