function takeToCity(event) {
  event.preventDefault();

  let apiKey = "3ca91e54a4bb1ebe7378db4e23b59cb4";
  let inputCity = document.querySelector("#inputCity");
  let searchCity = inputCity.value;

  function getTemperature(temperature) {
    let temp = Math.round(temperature.data.main.temp);
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = temp;

    let cityName = temperature.data.name;
    let country = temperature.data.sys.country;
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${cityName}, ${country}`;
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemperature);
}

function showCity(response) {
  function getCityName(response) {
    cityName = response.data.name;
    country = response.data.sys.country;

    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${cityName}, ${country}`;

    let inputCity = document.querySelector("#inputCity");
    inputCity.value = `${cityName}`;
  }
  let lat = response.coords.latitude;
  let lon = response.coords.longitude;
  let apiKey = "3ca91e54a4bb1ebe7378db4e23b59cb4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(getCityName);
}

function changetoCelsius(event) {
  event.preventDefault();
  let apiKey = "3ca91e54a4bb1ebe7378db4e23b59cb4";
  let inputCity = document.querySelector("#inputCity");
  let searchCity = inputCity.value;

  function getTemperature(temperature) {
    let temp = Math.round(temperature.data.main.temp);
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = temp;

    let currentUnit = document.querySelector("#current-unit");
    currentUnit.innerHTML = "ºF";

    let cityName = temperature.data.name;
    let country = temperature.data.sys.country;
    let currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = `${cityName}, ${country};`;
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(getTemperature);
}

function changetoFahrenheit(event) {
  event.preventDefault();

  let apiKey = "3ca91e54a4bb1ebe7378db4e23b59cb4";
  let inputCity = document.querySelector("#inputCity");
  let searchCity = inputCity.value;

  function getTemperature(temperature) {
    let temp = Math.round(temperature.data.main.temp);
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = temp;

    let currentUnit = document.querySelector("#current-unit");
    currentUnit.innerHTML = "ºF";

    let cityName = temperature.data.name;
    let country = temperature.data.sys.country;
    currentCity.innerHTML = `${cityName}, ${country}`;
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getTemperature);
}

function showCurrentCity() {
  navigator.geolocation.getCurrentPosition(showCity);
}

navigator.geolocation.getCurrentPosition(showCity);

let currentDate = document.querySelector(".current-hour");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = now.getDay();
let currentTextDay = days[currentDay];
let currentHour = now.getHours();

if (now.getHours() < 10) {
  currentHour = "0" + now.getHours();
} else {
  currentHour = now.getHours();
}

let currentMinutes = now.getMinutes();

if (now.getMinutes() < 10) {
  currentMinutes = "0" + now.getMinutes();
} else {
  currentMinutes = now.getMinutes();
}

let currentTime = `${currentHour}:${currentMinutes}`;
let dateToShow = `${currentTextDay} ${currentTime}`;

currentDate.innerHTML = dateToShow;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", takeToCity);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", showCurrentCity);

let celsiusUnit = document.querySelector("#celsius-unit");
celsiusUnit.addEventListener("click", changetoCelsius);

let fahrenheitUnit = document.querySelector("#fahrenheit-unit");
fahrenheitUnit.addEventListener("click", changetoFahrenheit);
