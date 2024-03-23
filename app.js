let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  //for find rendom number
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};
const drawGame = () => {
  msg.innerText = "Game Draw. Play again!";
  msg.style.backgroundColor = " rgb(34, 44, 58)";
};
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = " green";
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
//   console.log("User choice is =", userChoice);
  //Genrate computer choice
  const compChoice = genCompChoice();
//   console.log("Comp choice is =", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
