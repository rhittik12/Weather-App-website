const API_KEY = "141bcb92cbd272bf1b205d186f0359cb";

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('cityDisplay').textContent = "City not found";
                document.getElementById('temperature').textContent = "";
                document.getElementById('weatherDescription').textContent = "";
                return;
            }

            const cityDisplay = `City: ${data.name}`;
            const temperature = `Temperature: ${data.main.temp}°C`;
            const weatherDescription = `Weather: ${data.weather[0].description}`;

            document.getElementById('cityDisplay').textContent = cityDisplay;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('weatherDescription').textContent = weatherDescription;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById('cityDisplay').textContent = "Error fetching weather data";
            document.getElementById('temperature').textContent = "";
            document.getElementById('weatherDescription').textContent = "";
        });
});