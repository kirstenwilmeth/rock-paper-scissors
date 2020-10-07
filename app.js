let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)}   beats ${convertToWord(compChoice)}. You win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 400);
}


function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)}   loses to ${convertToWord(compChoice)}. You lost.`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 400)
}

function draw(userChoice, compChoice) {
    result_p.innerHTML = `You both picked ${convertToWord(userChoice)}. It's a draw.`
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 400)
}


function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, compChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, compChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, compChoice);
        break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    })

        paper_div.addEventListener('click', function() {
    game("p");
    })

    scissors_div.addEventListener('click', function() {
    game("s");
    })

}
main();
