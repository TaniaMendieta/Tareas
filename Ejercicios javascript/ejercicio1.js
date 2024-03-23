//Complete the function to print out the string: This is a sentence.

function printOutString() {
    let arr = ["This", "is", "a", "sentence."];
    let sentence = arr.join(" ");
    return sentence; // Devolver la cadena
  }
  
  // Obtener el botón del ejercicio 1
  const ejercicio1Btn = document.getElementById("ejercicio1-btn");
  
  // Agregar un event listener para llamar a la función cuando se haga clic en el botón
  ejercicio1Btn.addEventListener("click", function() {
      // Llamar a la función para obtener la cadena y mostrarla en el contenedor de resultados
      document.getElementById("resultado-container").innerText = printOutString();
  });