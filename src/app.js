// Timestamp Date
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let dates = date.getDate();
  return `${day}, ${month} ${dates}, ${hours}:${minutes}`;
}

// Search for a city input form for current weather conditions
function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "1bf547ta2a3986bceb80d3bcaob62269";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", cityInput);

// Weather Function Response
function showWeather(response) {
  console.log(response);
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

// Search with GPS Latitude and Longitude (Allow location search)
function searchLocation(position) {
  let apiKey = "1bf547ta2a3986bceb80d3bcaob62269";
  let units = "metric";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-input");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Fahrenheit Temperature Change
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let currentFahrenheitTemperature = document.querySelector("#temperature-now");
  fahrenheitLink.classList.add("active");
  celsiusLink.classList.remove("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  currentFahrenheitTemperature.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusTemperature = null;

// Celsius Temperature Change
function displayCelsiusTemperature(event) {
  event.preventDefault();
  let currentCelsiusTemperature = document.querySelector("#temperature-now");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  currentCelsiusTemperature.innerHTML = Math.round(celsiusTemperature);
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

// Placeholder city upon website launch and reload
searchCity("Milwaukee");

// Top Cities Weather
// Tokyo
function searchTokyo(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=tokyo&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showTokyoWeather);
}

function showTokyoWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}
let tokyoCity = document.querySelector("#tokyo");
tokyoCity.addEventListener("click", searchTokyo);
//
// New York
function searchNewYorkCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=new+york+city&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showNewYorkCityWeather);
}

function showNewYorkCityWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

let newYorkCity = document.querySelector("#new-york");
newYorkCity.addEventListener("click", searchNewYorkCity);
//
// London
function searchLondonCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=london&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showLondonCityWeather);
}

function showLondonCityWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

let londonCity = document.querySelector("#london");
londonCity.addEventListener("click", searchLondonCity);
//
// Los Angeles
function searchLosAngelesCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=los+angeles&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showLosAngelesCityWeather);
}

function showLosAngelesCityWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

let losAngelesCity = document.querySelector("#los-angeles");
losAngelesCity.addEventListener("click", searchLosAngelesCity);
//
// Paris
function searchParisCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=paris&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showParisCityWeather);
}

function showParisCityWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

let parisCity = document.querySelector("#paris");
parisCity.addEventListener("click", searchParisCity);
//
// Chicago
function searchChicagoCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.shecodes.io/weather/v1/current?&query=chicago&key=1bf547ta2a3986bceb80d3bcaob62269&units=metric`;
  axios.get(apiUrl).then(showChicagoCityWeather);
}

function showChicagoCityWeather(response) {
  celsiusTemperature = response.data.temperature.current;
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature-now").innerHTML =
    Math.round(celsiusTemperature);
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );
  displayCelsiusTemperature({ preventDefault: function () {} });
}

let chicagoCity = document.querySelector("#chicago");
chicagoCity.addEventListener("click", searchChicagoCity);
//
