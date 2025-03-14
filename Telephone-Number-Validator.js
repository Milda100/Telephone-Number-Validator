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
    const areaCodeRegex = "\d{3}|\\(\d{3}\\)";
    const symbolRegex = "[-\\s]";
    const phoneNoRegex = "\d{3}[-|\\s]?\d{4}$";

    const fullPhoneNoRegex = new RegExp(`${countryCodeRegex}${areaCodeRegex}${symbolRegex}${phoneNoRegex}`);

    if (fullPhoneNoRegex.test(userInput.value)) {
        results.innerHTML = `<p>Valid US number: ${userInput.value}</p>`;
    } else {
        results.innerHTML = `<p>Invalid US number: ${userInput.value}</p>`;
    }

    
}


checkBtn.addEventListener("click", () => checkInput(userInput));

// const clearResults = () => {
//     results.innerHTML = "";
// };
