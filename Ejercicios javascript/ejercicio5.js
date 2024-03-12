/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//Write a command that prints out all of the people in the list.
console.log(people);

//Write the command to remove "Dani" from the array.
people.splice(1, 1) 
console.log( people );

//Write the command to remove "Juan" from the array.
people.splice(2, 1) 
console.log( people );

//Write the command to move "Luis" to the front of the array.
let moviendoALuis = people.splice(2, 1)[0]; // Eliminar "Luis" del array y guardar el elemento eliminado
people.unshift(moviendoALuis); // Añadir "Luis" al principio del array

console.log(people);

//Write the command to add your name to the end of the array.
people.push("Tania");
console.log(people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
      break;
    }
  }
  
  // Write the command that gives the indexOf where "Maria" is located.
  let indexOfMaria = people.indexOf("Maria");
  console.log("El índice de Maria es:", indexOfMaria);
  
  console.log(people); // At the end of the exercise, there should be 4 people in the array.