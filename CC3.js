const GameForm = document.getElementById("game-form");
const GenerateInput = document.getElementById("generate-number");
const GuessInput = GameForm.querySelector("input#guess-number");

const playResult = document.querySelector("#result span:first-child");
const yourResult = document.querySelector("#result span:last-child");


function gameNumber(event) {
  event.preventDefault();
  if (GenerateInput.value === "" && GuessInput.value === "") {
    return;
  }
  const maxNumber = GenerateInput.value;
  const guessNumber = parseInt(GuessInput.value, 10);
  const machineChoice = Math.ceil(Math.random() * parseInt(maxNumber));
  playResult.innerText = `You chose: ${guessNumber}, the machine chose: ${machineChoice}`;
  if (guessNumber === machineChoice) {
    yourResult.innerText = "You won!";
  } else {
    yourResult.innerText = "You lost!";
  }
};

GameForm.addEventListener("submit", gameNumber);


