const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const countryCodeRegex = /^1\s?/;
const areaCodeRegex = /[0-9]{3}|\([0-9]{3}\)/;
const symbolRegex = /-|\s/;
const phoneNoRegex = /[0-9]{3}[-|\s]?[0-9]{4}$/;

const isPhoneNo = new RegExp(`${countryCodeRegex}${areaCodeRegex}${symbolRegex}${phoneNoRegex}`);





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
