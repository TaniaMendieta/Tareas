/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */
const array1 = [2, 4, 6, 8];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const product = array1.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("Suma:", sum); 
console.log("Producto:", product); 
