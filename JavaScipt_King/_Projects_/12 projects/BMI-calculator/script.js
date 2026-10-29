const btnEl = document.getElementById('calculateBtn');
const resultEl = document.getElementById('bmi-result');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const weightConditionEl = document.getElementById('weight-condition');

const calculateBMI = () => {
    const height = parseFloat(heightEl.value);
    const weight = parseFloat(weightEl.value);

    if (!Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight <= 0) {
        resultEl.value = 'Enter a valid height and weight';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    resultEl.value = `Your BMI is ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        weightConditionEl.innerHTML = 'You are underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightConditionEl.innerHTML = 'You have a normal weight';
    } else {
        weightConditionEl.innerHTML = 'You are overweight';
    }
}

btnEl.addEventListener('click', calculateBMI);