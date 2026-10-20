const celsiusEl = document.getElementById('celsius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');

function computeTemp(event) {
    const currentValue = Number(event.target.value);

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue * 9/5) + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) * 5/9).toFixed(2);
            kelvinEl.value = ((currentValue - 32) * 5/9 + 273.15).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (currentValue - 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.15) * 9/5 + 32).toFixed(2);
            break;
    }
}
