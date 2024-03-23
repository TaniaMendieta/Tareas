document.getElementById('startButton').addEventListener('click', startGame);

let min = 1;
let max = 100;

function startGame() {
  guessNumber();
}

function guessNumber() {
  let guess;
  let result;

  while (true) {
    guess = Math.floor((min + max) / 2);
    result = confirm(`¿Es ${guess} el número que has pensado?`);
    
    if (result) {
      showResult(guess);
      break;
    } else {
      let higher = confirm("¿Es tu número mayor que el que te he propuesto?");
      if (higher) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
}

function showResult(guess) {
  document.getElementById('guess').innerHTML = `¡Tu número es el ${guess}, excelente decisión!`;
}
