const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regex = /^1[0-9]{10}$|^[0-9]{10}$/g






const isCorrectInput = (input) => {

    if (input === "") {
        alert("Please provide a phone number");
          return;
    }
}

// const clearResults = () => {
//     results.innerHTML = "";
// }

checkBtn.addEventListener("click", isCorrectInput);
clearBtn.addEventListener("click", clearResults);
