const firstCurrencyEl = document.getElementById('from-currency');
const secondCurrencyEl = document.getElementById('to-currency');
const worthFirstEl = document.getElementById('worth-first');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');


updateRate();

function updateRate () {
    fetch(`https://v6.exchangerate-api.com/v6/f49d1e367e31bbf70795b1ba/latest/${firstCurrencyEl.value}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[secondCurrencyEl.value];
        exchangeRateEl.innerText = 
        `1 ${firstCurrencyEl.value} = ${rate.toFixed(2)} 
        ${secondCurrencyEl.value}`;

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}


firstCurrencyEl.addEventListener('change', updateRate); 



secondCurrencyEl.addEventListener('change', updateRate);



worthFirstEl.addEventListener('input', updateRate);