# Weather App

Clone the repository:
```

git clone https://github.com/Terre8055/weather-app.git
```

Open the `index.html` file in your browser.

Type in the name of a city in the input field and press "Enter".

## How it works

When a user enters a city name and presses "Enter", the `fetchCoords` function is called to retrieve the latitude and longitude of the city using the `geo/1.0/direct` API. If there is an error, an alert box will appear with the error message.

Once the latitude and longitude are retrieved, the `fetchWeather` function is called to retrieve the current weather information using the `data/2.5/weather` API. The information retrieved includes the name of the city, the current temperature, and a short description of the weather. This information is then logged to the console.

## Code Documentation

`fetchCoords(city)`

This function takes in a `city` parameter and retrieves the latitude and longitude of the city using the `geo/1.0/direct` API. It returns a Promise that resolves to an object containing the latitude and longitude.

If there is an error, an alert box will appear with the error message.

`fetchWeather(lat, lon)`

This function takes in `lat` (latitude) and `lon` (longitude) parameters and retrieves the current weather information of the given location using the `data/2.5/weather` API. It returns a Promise that resolves to the current weather information.

## Event Listener
An event listener is added to the input field that listens for the "Enter" key. When the "Enter" key is pressed, it retrieves the input value, calls the fetchCoords function to retrieve the latitude and longitude, and then calls the fetchWeather function to retrieve the current weather information. The information is then logged to the console.

## Dependencies
This app uses the Fetch API to make HTTP requests to the OpenWeatherMap APIs.

## Acknowledgments

- The developers of the OpenWeather API.
