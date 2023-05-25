// Date and Time Challenge
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
// Weather Challenge
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

// Bonus Feature
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
