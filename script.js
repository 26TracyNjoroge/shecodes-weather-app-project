function updateWeather(response) {
    let currentTemp = Math.round(response.data.temperature.current);
    let temperatureEl = document.querySelector("#weather-temperature-value");
    let city = document.querySelector("#weather-app-city");
    let cityEl = response.data.city;
    city.innerHTML = cityEl;
    temperatureEl.innerHTML = currentTemp;
}

function searchCity(city) {
    let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit() {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi")

