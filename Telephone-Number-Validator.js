const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


const checkInput = (userInput) => {

    if (userInput.value === "") {
        alert("Please provide a phone number");
          return;
    }

    const countryCodeRegex = "^1\\s?";
    const areaCodeRegex = "[0-9]{3}|\\([0-9]{3}\\)";
    const symbolRegex = "-|\\s";
    const phoneNoRegex = "[0-9]{3}[-|\\s]?[0-9]{4}$";

    const fullPhoneNoRegex = new RegExp(`${countryCodeRegex}${areaCodeRegex}${symbolRegex}${phoneNoRegex}`);

    if (fullPhoneNoRegex.test(userInput.value) === userInput){
        results.innerHTML = `<p>Valid US number: ${userInput.value}</p>`;
    } else {
        results.innerHTML = `<p>Invalid US number: ${userInput.value}</p>`;
    }

    
}

// const clearResults = () => {
//     results.innerHTML = "";
// }

checkBtn.addEventListener("click", () => checkInput(userInput));
clearBtn.addEventListener("click", clearResults);
