# Weather App

A simple weather application that allows users to search for weather information by entering a city name. The app fetches data from the OpenWeatherMap API and displays the temperature, location, and weather description.

## Features

- Search for weather information by city name.
- Displays the city's temperature in Celsius.
- Shows the weather description and the city location.
- User-friendly interface with basic styling and responsiveness.

## Prerequisites

To run the project, you need the following:

- A web browser (Google Chrome, Firefox, etc.)
- An internet connection to fetch weather data from the API
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

## How to Get an API Key

1. Sign up on the [OpenWeatherMap website](https://home.openweathermap.org/users/sign_up).
2. After signing up, navigate to your dashboard.
3. Create a new API key and copy the key.
4. Replace the placeholder API key in `script.js` with your actual API key.

```javascript
// OpenWeatherMap API details
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
