document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const weatherDashboard = document.getElementById('weatherDashboard');

    searchButton.addEventListener('click', function() {
        const city = searchInput.value.trim();
        if (city !== '') {
            fetchWeather(city);
        }
    });

    async function fetchWeather(city) {
        const apiKey = 'bd749faa074193d1c6ed972b5f2df348';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            renderWeatherComponent(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function renderWeatherComponent(data) {
        const weatherComponent = document.createElement('div');
        weatherComponent.classList.add('weather-component');
        
        let bgColor;
        if (data.main.temp > 25) {
            bgColor = '#FFCF81'; // Hot day color
        } else if (data.weather[0].main === 'Rain' || data.weather[0].main === 'Drizzle' || data.weather[0].main === 'Thunderstorm') {
            bgColor = '#556080'; // Rainy day color
        } else if (data.main.temp < 10) {
            bgColor = '#b0c4de'; // Cold day color
        } else {
            bgColor = '#e6e6fa'; // Default color
        }
        
        weatherComponent.style.backgroundColor = bgColor;

        weatherComponent.innerHTML = `
            <h2>${data.name}</h2>
            <div class="weather-icon">
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
            </div>
            <div class="weather-details">
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Feels like: ${data.main.feels_like} &deg;C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        `;

        weatherDashboard.innerHTML = '';
        weatherDashboard.appendChild(weatherComponent);
    }
});
