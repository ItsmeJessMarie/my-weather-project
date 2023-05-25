// Date and Time
let currentTime = new Date();

function formatDate(date) {
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

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  //let currentSeconds = date.getSeconds();
  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHour}:${currentMinutes}`;
  return formattedDate;
}

let currentTimeDay = document.querySelector("#date");
currentTimeDay.innerHTML = formatDate(currentTime);

// City Search Challenge
/*function cityValue(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = city.value;
}
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", cityValue);
*/
// Temp Conversion Challenge
/*function tempChangeCelsius(event) {
  event.preventDefault();
  let tempNow = 17;
  let currentTemp = document.querySelector("#temperature-now");
  currentTemp.innerHTML = tempNow;
}
let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", tempChangeCelsius);

function tempChangeFahrenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature-now");
  let tempNow = 17;
  let fahrenheitTemperature = Math.round((tempNow * 9) / 5 + 32);
  currentTemp.innerHTML = fahrenheitTemperature;
}
let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", tempChangeFahrenheit);
*/
// Search for a city input form for current weather conditions
function cityInput(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function searchCity(city) {
  let units = "metric";
  let apiKey = "510eb6dd5bb8e3c932735e64258bc48d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", cityInput);

// Placeholder city upon website launch and reload
searchCity("Chicago");

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

// Search with GPS Latitude and Longitude (Allow location search)
function searchLocation(position) {
  let apiKey = "510eb6dd5bb8e3c932735e64258bc48d";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-input");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Top Cities Weather
// Tokyo
function searchTokyo(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showTokyoWeather);
}

function showTokyoWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}
let tokyoCity = document.querySelector("#tokyo");
tokyoCity.addEventListener("click", searchTokyo);

// New York
function searchNewYorkCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new+york+city&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showNewYorkCityWeather);
}

function showNewYorkCityWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

let newYorkCity = document.querySelector("#new-york");
newYorkCity.addEventListener("click", searchNewYorkCity);

// London
function searchLondonCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showLondonCityWeather);
}

function showLondonCityWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

let londonCity = document.querySelector("#london");
londonCity.addEventListener("click", searchLondonCity);

// Los Angeles
function searchLosAngelesCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=los+angeles&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showLosAngelesCityWeather);
}

function showLosAngelesCityWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

let losAngelesCity = document.querySelector("#los-angeles");
losAngelesCity.addEventListener("click", searchLosAngelesCity);

// Paris
function searchParisCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showParisCityWeather);
}

function showParisCityWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

let parisCity = document.querySelector("#paris");
parisCity.addEventListener("click", searchParisCity);

// Chicago
function searchChicagoCity(event) {
  event.preventDefault();
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=510eb6dd5bb8e3c932735e64258bc48d`;
  axios.get(apiUrl).then(showChicagoCityWeather);
}

function showChicagoCityWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}

let chicagoCity = document.querySelector("#chicago");
chicagoCity.addEventListener("click", searchChicagoCity);
