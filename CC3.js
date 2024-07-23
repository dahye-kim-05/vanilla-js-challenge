const GameForm = document.querySelector("#game-form");
const GenerateInput = GameForm.querySelector("#generate-number");
const GuessInput = GameForm.querySelector("#guess-number");

const playResult = document.querySelector("#result span:first-child");
const yourResult = document.querySelector("#result span:last-child");


function handleMaxNumber() {
  const maxNumber = GenerateInput.value;
  GuessInput.max = maxNumber;
}

function gameNumber(event) {
  event.preventDefault();
  const maxNumber = GenerateInput.value;
  const guessNumber = parseInt(GuessInput.value);
  const machineChoice = Math.ceil(Math.random() * parseInt(maxNumber));
  playResult.innerText = `You chose: ${guessNumber}, the machine chose: ${machineChoice}`;
  if (guessNumber === machineChoice) {
    yourResult.innerText = "You won!";
  } else {
    yourResult.innerText = "You lost!";
  }
};

GenerateInput.addEventListener("input", handleMaxNumber);
GameForm.addEventListener("submit", gameNumber);


