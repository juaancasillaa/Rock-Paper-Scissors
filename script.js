// Selecting DOM elements using getElementById
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

// Variables to store player and computer choices, and game results
let player;
let computer;
let results;

// Event listeners for each choice button using getElementById
rockButton.addEventListener("click", () => {
    playGame("Rock");
});

paperButton.addEventListener("click", () => {
    playGame("Paper");
});

scissorsButton.addEventListener("click", () => {
    playGame("Scissors");
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
