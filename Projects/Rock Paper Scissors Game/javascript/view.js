

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win !" : "You loss !";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win !" : "You loss !";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win !" : "You loss !";
                break;
        }
    }

    document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
