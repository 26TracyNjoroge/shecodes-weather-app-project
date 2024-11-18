function updateWeather(response) {
    let timestamp = response.data.time; 
    let temperatureEl = document.querySelector("#weather-temperature-value");
    let cityEl = document.querySelector("#weather-app-city");
    let descriptionEl = document.querySelector("#weather-description");
    let humidityEl = document.querySelector("#humidity");
    let windSpeedEl = document.querySelector("#wind-speed");
    let dateEl = document.querySelector("#weather-date")

    let date = new Date(timestamp * 1000);

    let currentTemp = Math.round(response.data.temperature.current);
    let city = response.data.city;
    let description = response.data.condition.description;
    let humidity = `${response.data.temperature.humidity}%`;
    let windSpeed = `${response.data.wind.speed}km/h`;

    dateEl.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    descriptionEl.innerHTML = description;
    cityEl.innerHTML = city;
    temperatureEl.innerHTML = currentTemp;
    humidityEl.innerHTML = humidity;
    windSpeedEl.innerHTML = windSpeed;

    console.log(date);
    console.log(response.data.time)
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

