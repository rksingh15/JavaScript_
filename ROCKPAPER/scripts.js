let userS = 0;
let compS = 0;

const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const userScore = document.getElementById('user_score');
const compScore = document.getElementById('computer_score');

const drawGame = () => {
    message.innerText = "It's a Draw!";
};

const showWinner = (userWin) => {
    if (userWin) {
        message.innerText = "You Win!";
        userS++;
        userScore.innerText = userS;
    } else {
        message.innerText = "Computer Wins!";
        compS++;
        compScore.innerText = compS;
    }
};

const computerPlayGame = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoice = computerPlayGame();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (
            (userChoice === "rock" && compChoice === "paper") ||
            (userChoice === "paper" && compChoice === "scissors") ||
            (userChoice === "scissors" && compChoice === "rock")
        ) {
            userWin = false;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
