function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes} `;
}

function displayTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );

  document.querySelector("#city").innerHTML = response.data.city;

  document.querySelector("#description").innerHTML =
    response.data.condition.description;

  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#date").innerHTML = formatDate(
    response.data.time * 1000
  );

  document
    .querySelector("#icon")
    .setAttribute("src", response.data.condition.icon_url);

  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.condition.description);
}

function search(city) {
  let apikey = "ac4718tebo0140d763b189a9af37eaa4";

  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;

  axios.get(apiurl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  search(document.querySelector("#search-input").value);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
