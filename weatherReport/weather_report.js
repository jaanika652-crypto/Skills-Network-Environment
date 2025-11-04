function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Fetching weather for:', city);

    fetch(apiUrl)
        .then(response => {
            console.log('Response status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                         <p>Temperature: ${data.main.temp} &#8451;</p>
                                         <p>Weather: ${data.weather[0].description}</p>`;
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Unable to retrieve weather data at this time.</p>`;
        });
}
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
