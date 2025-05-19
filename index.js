const API_KEY = "141bcb92cbd272bf1b205d186f0359cb";

document
  .getElementById("weatherForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    //const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          document.getElementById("cityDisplay").textContent = "City not found";
          document.getElementById("temperature").textContent = "";
          document.getElementById("weatherDescription").textContent = "";
          return;
        }

        document.getElementById("cityDisplay").textContent = `City: ${data.name}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherDescription").textContent = `Weather: ${data.weather[0].description}`;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.getElementById("cityDisplay").textContent = "Error fetching weather data";
        document.getElementById("temperature").textContent = "";
        document.getElementById("weatherDescription").textContent = "";
      });
  });
