// Selecting DOM elements
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceInput = document.getElementById("choiceInput");

// Variables to store player and computer choices, and game results
let player;
let computer;

// Event listener for the single input field
choiceInput.addEventListener("change", () => {
    playGame(choiceInput.value);
});

// Function to play the game
function playGame(playerChoice) {
    // Set player's choice
    player = playerChoice;
    // Generate computer's choice
    computerTurn();
    // Display choices and result
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}

// Function to generate computer's choice
function computerTurn() {
    // Array of possible choices
    const choices = ["Rock", "Paper", "Scissors"];
    // Generate a random index within the length of the choices array
    const randomIndex = Math.floor(Math.random() * choices.length);
    // Assign computer's choice based on the randomly selected index
    computer = choices[randomIndex];
}

// Function to determine the winner
function checkWinner() {
    if (player === computer) {
        return "It's a tie!";
    } else if (computer === "Rock") {
        return (player === "Paper") ? "You win!" : "Computer wins!";
    } else if (computer === "Paper") {
        return (player === "Scissors") ? "You win!" : "Computer wins!";
    } else if (computer === "Scissors") {
        return (player === "Rock") ? "You win!" : "Computer wins!";
    }
}

