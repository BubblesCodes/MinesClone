// start button will put a bomb in a random item of the list depending on how many are in the modifier  

const startButton = document.getElementById("start-button")
const clearButton = document.getElementById("clear-button")
let outputMessageEl = document.getElementById("output-message")
let outputMessage = outputMessageEl.innerHTML 
let inputModifier = document.getElementById("input-modifier")



inputModifier.addEventListener('input', function (e) {
  // Remove any non-numeric characters using a regular expression
  this.value = this.value.replace(/[^0-9]/g, '');
});
// create a for loop that will select a random tile and put a bomb in the amount of times the modifier says to
function renderGame() {
  let minesAmount = inputModifier.value
  console.log(minesAmount)

  if (minesAmount > 0) {
    console.log("working")
  } else {
    outputMessage = "Error: Mines Value Not Accepted";
    outputMessageEl.innerHTML = outputMessage;  
  }
}

function clearMines() {
  outputMessage = "Currently Working"
  outputMessageEl.innerHTML = outputMessage;  
  inputModifier.value = 0
}