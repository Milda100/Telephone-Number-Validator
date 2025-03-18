const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const countryCodeRegex = /^(1\s?)?/;
const areaCodeRegex = /(\d{3}|\(\d{3}\))/;
const symbolRegex = /[-\s]?/;
const phoneNoRegex = /\d{3}[-\s]?\d{4}$/;
    
const fullPhoneNoRegex = new RegExp(
    `${countryCodeRegex.source}${areaCodeRegex.source}${symbolRegex.source}${phoneNoRegex.source}`
    );

const checkInput = () => {
    const input = userInput.value.trim();

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }
    

    const message = fullPhoneNoRegex.test(input)
        ? `Valid US number: ${input}`
        : `Invalid US number: ${input}`;
    
    const resultDiv = document.createElement("div");
    resultDiv.textContent = message;
    results.appendChild(resultDiv);

    userInput.value = "";
};


const clearResults = () => {
    results.textContent = "";
};

checkBtn.addEventListener("click", checkInput);
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkInput();
    }
  });
clearBtn.addEventListener("click", clearResults);
