const buttonEl = document.querySelectorAll("button")

//pred psanim predpipravenych funkci (3) >  1.funkce pro vyplneni =  "function appendValue"  -- nasleduje --- >  2.funkce pro vyplneni =  "function calculateResult"
const inputFieldEl = document.getElementById("result")




for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", () => {
        const buttonValue = buttonEl[i].textContent

        if (buttonValue === "C") {
            clearResult()
            
        } else if (buttonValue === "=") {
            calculateResult()

        } else if (buttonValue === "x") {  // *dodatečna funkce smazani posledniho znaku v "inputu"
            removeChar()

        } else {
             appendValue(buttonValue)
        }
    })
}

//predpipravene funkce (3.funkce)
function clearResult(){
    inputFieldEl.value = "";
};

// Funkce eval() v jazyce JavaScript je vestavěný příkaz, který spouští textový řetězec jako běžný kód. Převezme text, který jí předáte, a vyhodnotí ho nebo ho rovnou provede, jako by byl součástí skriptu. --(eval)--
function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue
}
 

//************************** */
// *dodatečna funkce smazani posledniho znaku v "inputu"
function removeChar() {
    inputFieldEl.value = inputFieldEl.value.slice(0, -1)
}