let now = new Date();
let daytime = document.querySelector("#day-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

daytime.innerHTML = `${day} ${hours}:${minutes}`;

function showCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#input-city");

  let h2 = document.querySelector("h2");
  h2.innerHTML = cityInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", showCity);

// week5
let city = "New York";
let apiKey = "9e48f1a3135e9b88c10a54e6e46a4721";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#temp-description");
  descriptionElement.innerHTML = response.data.weather[0].main;
  // let nameElement = document.querySelector("#city");
  // nameElement.innerHTML = response.data.name;
  let highElement = document.querySelector("#high");
  highElement.innerHTML = Math.round(response.data.main.temp_max);
  let lowElement = document.querySelector("#low");
  lowElement.innerHTML = Math.round(response.data.main.temp_min);
  let windElement = document.querySelector("#windspeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
}

axios.get(apiUrl).then(showTemperature);

function search(city) {
  let apiKey = "9e48f1a3135e9b88c10a54e6e46a472";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  // axios.get(apiUrl).then(showTemperature);
}

function pressSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#temperature").value;
  search(temperature);
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", pressSubmit);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "9e48f1a3135e9b88c10a54e6e46a4721";
  let apiUrlNow = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrlNow).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
