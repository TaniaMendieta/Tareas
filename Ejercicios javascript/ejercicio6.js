/* Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */

function ordenamientoBurbuja(arr) {
    let longitud = arr.length;
    let intercambiado;
    do {
      intercambiado = false;
      for (let i = 0; i < longitud - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temporal = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temporal;
          intercambiado = true;
        }
      }
    } while (intercambiado);
    return arr;
  }
  
  let entrada = [3, 6, 12, 5, 100, 1];
  let arregloOrdenado = ordenamientoBurbuja(entrada);
  console.log(arregloOrdenado); 






  