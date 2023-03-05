let apiKey = "fd0d5336128040901d0b87a9e9f0d87e";// Set the API key and select the input field
let cityName = document.querySelector('input');

let lat, lon;// Declare variables to store latitude and longitude

/*Add event listener to the input field
  Check if Enter key was pressed
  @event.target.value - Get the city name from the input field
*/
cityName.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
      let city = event.target.value;
      //Call the fetchCoords function to get the latitude and longitude for the city
      fetchCoords(city).then(coords => {
        lat = coords.latitude;
        lon = coords.longitude
        // Call the fetchWeather function to get weather data for the city
        fetchWeather(lat, lon).then(data => console.log(data.name, data.main.temp, data.weather[0].description)) 
       })

  }  
})

// Define the fetchCoords function to get the latitude and longitude for a given city
function fetchCoords(city){
  return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
  .then(res => res.json())
  .then(data => {
        let longitude, latitude;
        for(key of data){
          latitude = key.lat
          longitude = key.lon
  }
  return {longitude, latitude}// Return the latitude and longitude as an object
})
  .catch(error => alert(error))// Alert an error message if the request fails
}


// Define the fetchWeather function to get weather data for a given latitude and longitude
function fetchWeather(lat, lon){
  return  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => data)
}












