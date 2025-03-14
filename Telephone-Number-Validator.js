const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


const checkInput = () => {
    console.log("Function called!");
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }

    console.log("User input:", userInput.value);
    const countryCodeRegex = "^(1\\s?)?";
    const areaCodeRegex = "\\d{3}|\\(\\d{3}\\)";
    const symbolRegex = "[-\\s]?";
    const phoneNoRegex = "\\d{3}[-|\\s]?\\d{4}$";
    
    const fullPhoneNoRegex = new RegExp(`${countryCodeRegex}${areaCodeRegex}${symbolRegex}${phoneNoRegex}`);

    
    console.log("Regex Test Result:", fullPhoneNoRegex.test(userInput.value));
    if (fullPhoneNoRegex.test(userInput.value)) {
        results.innerHTML += `<div>Valid US number: ${userInput.value}</div>`;
    } else {
        results.innerHTML += `<div>Invalid US number: ${userInput.value}</div>`;
    }
    userInput.value = "";
};


const clearResults = () => {
    results.innerHTML = "";
    userInput.value = "";
};

checkBtn.addEventListener("click", () => checkInput(userInput));
clearBtn.addEventListener("click", clearResults);
