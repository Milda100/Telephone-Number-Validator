const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


const isCorrectInput = (input) => {

    if (input === "") {
        alert("Please provide a phone number");
          return;
    }
}

checkBtn.addEventListener("click", isCorrectInput);
