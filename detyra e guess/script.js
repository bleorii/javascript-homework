// let randomNumber = Math.trunc(Math.random() * 20) + 1;

// document.addEventListener("DOMContentLoaded", function (){
//     const inputElement = document.querySelector(".input");
//     const checkButtonElement = document.querySelector(".guess-btn");
//     const feedbackElement = document.querySelector(".feedback");
//     const scoreElement = document.querySelector(".score");
//     const startAgainElement = document.querySelector(".start-again");

//      let score = Number(scoreElement.textContent);
//     checkButtonElement.addEventListener("click", function() {
  

        
//         function checkscore(score,feedbackText,color){

//         }

        
//         if(inputElement.value == randomNumber) {
//             if (score > 1) {
//                  feedbackElement.textContent = "You won!";
//             feedbackElement.style.color = "green";
//             }else {
//                 feedbackElement.textContent = "You lost!";
//             feedbackElement.style.color = "red";
//             }
//         } else if (inputElement.value > randomNumber) {
//             if(score > 1){
//                   feedbackElement.textContent = "Too high!";
//             feedbackElement.style.color = "red";
//             score--;
//             }else {
//                 feedbackElement.textContent = "You lost!";
//             feedbackElement.style.color = "red";
//             }
          
//         } else{
//             if(score > 1){
//                 feedbackElement.textContent = "Too low!";
//             feedbackElement.style.color = "red";
//           score--;
//             }
//         }
//         console.log("score", score);
//       console.log("randomNumber", randomNumber);
//         scoreElement.textContent = score;

//     });

//     startAgainElement.addEventListener("click", function() {
//         randomNumber = Math.trunc(Math.random() * 20) + 1;
//         inputElement.value = "";
//         feedbackElement.textContent = "Your guess was!";
//         score = 20;
//         scoreElement.textContent = score;
//     });
// });
const names = ["ardit","rasim","anisa","blend","ledion"];
let randomName = names[Math.floor(Math.random() * names.length)];


document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".input");
    const checkButtonElement = document.querySelector(".guess-btn");
    const feedbackElement = document.querySelector(".feedback");
    const scoreElement = document.querySelector(".score");
    const startAgainElement = document.querySelector(".start-again");

    let score = 10;
    scoreElement.textContent = score;

    checkButtonElement.addEventListener("click", function () {
        const userGuess = inputElement.value.trim();
        
        if (userGuess === randomName) {
            feedbackElement.textContent = "You won!";
            feedbackElement.style.color = "green";
        } else {
            if (score > 1) {
                feedbackElement.textContent = "Wrong! Try again.";
                feedbackElement.style.color = "red";
                score--;
            } else {
                feedbackElement.textContent = "You lost! The correct name was " + randomName ;
                feedbackElement.style.color = "red";
            }
        }
        scoreElement.textContent = score;
    });

    startAgainElement.addEventListener("click", function () {
        randomName = names[Math.floor(Math.random() * names.length)];
        console.log("New Random Name:", randomName);
        inputElement.value = "";
        feedbackElement.textContent = "Guess the name!";
        score = 10;
        scoreElement.textContent = score;
    });
});
