let apiKey= "d73a9c6d15207cbcbf47a357b695f867"
// let tempNum= document.getElementById("what_to_wear").innerHTML

// function getWeather() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Use latitude and longitude to get weather data from a weather API
    var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

    fetch(weatherApiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherData) {
        // Log the weatherData to the console
      console.log(weatherData);
      let tempCel = Math.round((weatherData.main.temp - 273.15) * 10) / 10
      document.getElementById("name").innerHTML= weatherData.name
      document.getElementById("weather_current").innerHTML = weatherData.weather[0].main
      document.getElementById("temp_current").innerHTML = tempCel + String.fromCharCode(176) + "C"
      if (tempCel <= 0){
        document.getElementById("what_to_wear").innerHTML = "Winter is coming/here"
      }else if (tempCel > 0 && tempCel <= 10){
        document.getElementById("what_to_wear").innerHTML = "Layer up, folks!"
      }else if (tempCel > 10 && tempCel <= 15){
        document.getElementById("what_to_wear").innerHTML = "A Jacket will do"
      }else if (tempCel > 15 && tempCel <=17){
        document.getElementById("what_to_wear").innerHTML = "Now it's time for everybody's favourite: the hoodie!"
      }else {
        document.getElementById("what_to_wear").innerHTML = "It's shorts season!"
      }
      });
  }, showError);
// }

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}
