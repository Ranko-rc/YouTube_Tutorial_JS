const containerEL = document.querySelector(".container");

const careers = ["Youtube student", "Web developer", "Designer", "Security specialist" ];
let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    const currentText = careers[careerIndex].slice(0, characterIndex);
    containerEL.innerHTML = `<h1> I"am ${currentText} ... </h1>`;

    if (characterIndex < careers[careerIndex].length) {
        characterIndex++;
        setTimeout(updateText, 200);
    } else {
        setTimeout(() => {
            careerIndex = (careerIndex + 1) % careers.length;
            characterIndex = 0;
            updateText();
        }, 1000);
    }
}

updateText();
