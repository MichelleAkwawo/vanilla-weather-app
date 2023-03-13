function displayTemperature(response) {
  console.log(response.data.temperature.current);

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
}

let apikey = "ac4718tebo0140d763b189a9af37eaa4";
let apiurl = `https://api.shecodes.io/weather/v1/current?query="New York"&key=${apikey}&units=metric`;
console.log(apiurl);

axios.get(apiurl).then(displayTemperature);
