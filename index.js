// function checkGuess(userGuess, actual) {
//     if (userGuess === actual){
//         alert("Correct guess, your head dey there")
//     }
// }

// Get your guess number from the input value
const inputVal = document.querySelector("input");

// Get your button element
const inputButton = document.getElementsByClassName("btn")[0];

// Generate a guess
const actualGuess = 10;


function checkGuess(userGuess, actualGuess) {
// Function body where implementation happens


  // Check if guess is the same with user guess
  // If guess is the same, user wins
  if (userGuess.length > 0) {
    if (Number(userGuess) === actualGuess) {
      alert("Correct guess, your head dey there");
    }
    // Else if guess is not the same, User loses
    else if (userGuess !== actualGuess) {
      alert("Try get sense na, Guess again");
    }

    return
  }
  alert("Input is empty")

}

inputButton.addEventListener("click", function (e) {
    e.preventDefault()
    // input.value equals userGuess during function definition AND
    // actualGuess equals actualGuess during function definition
  checkGuess(inputVal.value, actualGuess);
});


// count variable
let counts = setInterval(updated);
let upto =50;
function updated(){
    let count = document.getElementById("counter");
    count.innerHTML = --upto;
    if (upto ===0) {
        clearInterval(counts);
    }
    
    alert("you have run out of Guess")

   
}

// for (let index =0; index  > count.length; 
//   index--);
//   alert("guess again")

// if(let index = 0; index < count.lenght;
//  index --)
//  alert("attempt again")






