const inputEl = document.getElementById("input");
const errEl = document.getElementById("err-text");
const resultEl = document.getElementById("result-value");

let errorTime;
let resultTime;

function updateResult() {
    const value = Number(inputEl.value);

    if (inputEl.value === "" || Number.isNaN(value) || value < 0) {
        errEl.innerText = "Please enter valid number!";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errEl.innerText = "";
            inputEl.value = "";
        }, 2000);
        return;
    }

    resultEl.innerText = "Weight in Kg: " + (value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
        resultEl.innerText = ""; 
        inputEl.value = "";
    }, 10000);
}

inputEl.addEventListener("input", updateResult);