const btnEl = document.getElementById("btn");
const bmiInputEL = document.getElementById("bmi-result")
const weighCconditionEl = document.getElementById("weight-condition")

function calculateBMI(){
    const heightValue = document.getElementById("height").value /100

    const weightValue = document.getElementById("weight").value

    const bmiValue = weightValue / (heightValue * heightValue)

    bmiInputEL.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weighCconditionEl.innerText = "Under Weight"   
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9){
        weighCconditionEl.innerText = "Normal Weight"
    } else if (bmiValue >= 25 && bmiValue <= 29.9){
        weighCconditionEl.innerText = "Overweight"
    } else if (bmiValue >= 30 ){
        weighCconditionEl.innerText = "Obesity"
    }
}


btnEl.addEventListener("click", calculateBMI);
