/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

// Función para calcular la suma y el producto de los números en el array
function calculateSumAndProduct() {
    const array1 = [2, 4, 6, 8];
    const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const product = array1.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return { sum, product }; // Devolver un objeto con la suma y el producto
  }
  
  // Obtener el botón del ejercicio 3
  const ejercicio3Btn = document.getElementById("ejercicio3-btn");
  
  // Agregar un event listener para llamar a la función cuando se haga clic en el botón
  ejercicio3Btn.addEventListener("click", function() {
      // Llamar a la función para obtener la suma y el producto y mostrarlos en el contenedor de resultados
      const { sum, product } = calculateSumAndProduct();
      document.getElementById("resultado-container").innerHTML = "<p>Suma: " + sum + "</p><p>Producto: " + product + "</p>";
  });
