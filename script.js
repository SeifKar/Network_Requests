document.getElementById('fetch-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
      fetchWeatherData(location);
    }
  });
  
  function fetchWeatherData(location) {
    const apiKey = 'e514508d0470ee9b4f563742143da716'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); // For debugging
        displayWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Failed to retrieve data. Please try again.');
      });
  }
  
  function displayWeatherData(data) {
    const city = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
  
    document.getElementById('city').textContent = `City: ${city}`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
  }
  