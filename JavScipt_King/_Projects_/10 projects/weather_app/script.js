// API klíč pro OpenWeatherMap; v praxi je vhodné ho ukládat bezpečnějším způsobem.
const apiKey = "f2d4ec660541654695f86d2edcacc5e9"; // Nahraďte vlastním klíčem, pokud je potřeba.

// Načtení elementů z DOM, se kterými budeme pracovat.
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

// Funkce pro načtení dat o počasí podle zadaného města.
async function getWeatherData(cityValue) {
    // Pokud uživatel nezadá název města, zastavíme běh a zobrazíme upozornění.
    if (!cityValue) {
        alert("Please enter a city name.");
        return;
    }

    // Kontrola, zda uživatel vložil skutečný klíč API.
    if (apiKey === "YOUR_API_KEY") {
        alert("Add your OpenWeatherMap API key in script.js.");
        return;
    }

    try {
       // Odeslání požadavku na OpenWeatherMap API s měřením v jednotkách metrických.
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityValue)}&appid=${apiKey}&units=metric`);
       const data = await response.json();

       // Pokud server odpověděl chybou, vyhodíme vlastní chybu pro uživatele.
       if (!response.ok) {
            throw new Error(data.message || `Request failed (${response.status})`);
        }

        // Přečtení důležitých hodnot z odpovědi API.
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const iconCode = data.weather[0].icon;

        // Aktualizace hodnot v HTML podle získaných dat z API.
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".detail div:nth-child(1)").textContent = `Feels like: ${feelsLike}°C`;
        weatherDataEl.querySelector(".detail div:nth-child(2)").textContent = `Humidity: ${humidity}%`;
        weatherDataEl.querySelector(".detail div:nth-child(3)").textContent = `Wind speed: ${windSpeed} m/s`;

        // Výběr ikony podle kódu počasí – například déšť nebo slunce.
        weatherDataEl.querySelector(".icon i").className = `bx bx-${iconCode.startsWith("09") || iconCode.startsWith("10") ? "cloud-rain" : "sun"} bx-lg`;

    } catch (error) {
        // Zachycení a zobrazení chyby pro uživatele.
        alert(error.message);
        console.error("Error fetching weather data:", error);
    }
}

// Odezva na odeslání formuláře – načte data pro zadané město.
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value.trim();
    getWeatherData(cityValue);
})


