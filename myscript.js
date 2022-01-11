"use strict";

function GuessMyNumber() {
  document.querySelector(".left").textContent = "";
  document.querySelector(".right").textContent = "";
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector("#tryAgain").textContent = "<- Enter Value";
  let highScore = 0;
  let score = 20;
  const randomNum = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNum); //remove later
  document.querySelector("#valueBox").value = 1; //This has to be removed later

  document.querySelector("#check").addEventListener("click", function () {
    const EnteredValue = document.querySelector("#valueBox").value;
    if (EnteredValue == "" || EnteredValue < 1 || EnteredValue > 20) {
      document.querySelector("#tryAgain").textContent = "Invalid Input";
    } else if (score == 0) {
      document.querySelector(".right").textContent = "";
      document.querySelector(".left").textContent = "";
      document.querySelector(
        ".center"
      ).textContent = `Game Over! Number was ${randomNum}`;
      document.querySelector("#highScore").textContent = highScore;
      document.querySelector("body").style.backgroundColor = "#cd0000";
    } else {
      if (EnteredValue == randomNum) {
        document.querySelector("#tryAgain").textContent = "Correct Answer";
        document.querySelector(".center").textContent = `${randomNum}`;
        document.querySelector("body").style.backgroundColor = "#00eb00";
        if (score > highScore) {
          highScore = score;
          document.querySelector("#highScore").textContent = highScore;
        }
      } else if (randomNum > EnteredValue) {
        score--;
        document.querySelector(".right").textContent = "";
        document.querySelector(".left").textContent = "Low";
        document.querySelector("#score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#cd0000";
      } else if (randomNum < EnteredValue) {
        score--;
        document.querySelector(".left").textContent = "";
        document.querySelector(".right").textContent = "High";
        document.querySelector("body").style.backgroundColor = "#cd0000";
        document.querySelector("#score").textContent = score;
      }
    }
  });
}
GuessMyNumber();
document.querySelector("#again").addEventListener("click", GuessMyNumber);
