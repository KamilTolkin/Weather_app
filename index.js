document.addEventListener("DOMContentLoaded", () =>(
  getWeather()
))


let apiKey= "d73a9c6d15207cbcbf47a357b695f867"


function getWeather() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

      let weatherForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?' +
      'lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

    fetch(weatherApiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherData) {
        // Log the weatherData to the console
      console.log(weatherData);
      let tempCel = Math.round((weatherData.main.temp - 273.15) * 10) / 10
      document.getElementById("name").innerHTML= "The current weather in " + weatherData.name + ":"
      document.getElementById("weather_current").innerHTML = weatherData.weather[0].main
      document.getElementById("temp_current").innerHTML = tempCel + String.fromCharCode(176) + "C"
      if (tempCel <= 0){
        document.getElementById("what_to_wear").innerHTML = "Winter is coming/here!"
      }else if (tempCel > 0 && tempCel <= 10){
        document.getElementById("what_to_wear").innerHTML = "Layer up, folks!"
      }else if (tempCel > 10 && tempCel <= 15){
        document.getElementById("what_to_wear").innerHTML = "A Jacket will do!"
      }else if (tempCel > 15 && tempCel <=17){
        document.getElementById("what_to_wear").innerHTML = "Now it's time for everybody's favourite: the hoodie!"
      }else {
        document.getElementById("what_to_wear").innerHTML = "It's shorts season!"
      }
      });

    fetch(weatherForecastUrl)
      .then(function(responseForecast){
        return responseForecast.json();
      })
      .then(function(weatherForecast){
        console.log(weatherForecast)
        filterForecastData(weatherForecast)
        document.getElementById("forecast_tomorrow").innerHTML = filteredForecasts[0].weather[0].main
        document.getElementById("temp_tomorrow").innerHTML = Math.round((filteredForecasts[0].main.temp - 273.15) * 10) / 10 + String.fromCharCode(176) + "C"
        document.getElementById("forecast_2nd_day").innerHTML = filteredForecasts[4].weather[0].main
        document.getElementById("temp_2nd_day").innerHTML = Math.round((filteredForecasts[4].main.temp - 273.15) * 10) / 10 + String.fromCharCode(176) + "C"
        document.getElementById("forecast_3rd_day").innerHTML = filteredForecasts[8].weather[0].main
        document.getElementById("temp_3rd_day").innerHTML = Math.round((filteredForecasts[8].main.temp - 273.15) * 10) / 10 + String.fromCharCode(176) + "C"
        document.getElementById("forecast_4th_day").innerHTML = filteredForecasts[12].weather[0].main
        document.getElementById("temp_4th_day").innerHTML = Math.round((filteredForecasts[12].main.temp - 273.15) * 10) / 10 + String.fromCharCode(176) + "C"
        document.getElementById("forecast_5th_day").innerHTML = filteredForecasts[16].weather[0].main
        document.getElementById("temp_5th_day").innerHTML = Math.round((filteredForecasts[16].main.temp - 273.15) * 10) / 10 + String.fromCharCode(176) + "C"
        let tomorrowDate = new Date(filteredForecasts[0].dt * 1000);
        let options = {
          day: "numeric",
          month: "short"
      };
      document.getElementById("tomorrow_date").innerHTML = tomorrowDate.toLocaleDateString("en-UK", options);
      let secondDate = new Date(filteredForecasts[4].dt * 1000);
      document.getElementById("2nd_date").innerHTML = secondDate.toLocaleDateString("en-UK", options);
      let thirdDate = new Date(filteredForecasts[8].dt * 1000);
      document.getElementById("3rd_date").innerHTML = thirdDate.toLocaleDateString("en-UK", options);
      let fourthDate = new Date(filteredForecasts[12].dt * 1000);
      document.getElementById("4th_date").innerHTML = fourthDate.toLocaleDateString("en-UK", options);
      let fifthDate = new Date(filteredForecasts[16].dt * 1000);
      document.getElementById("5th_date").innerHTML = fifthDate.toLocaleDateString("en-UK", options);
      })
  }, showError);
}

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

let filteredForecasts

function filterForecastData(forecastData) {
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0);
  tomorrow.setMinutes(0);
  tomorrow.setSeconds(0);
  tomorrow.setMilliseconds(0);
  
  filteredForecasts = forecastData.list.filter(forecast => {
      let forecastTime = new Date(forecast.dt * 1000);
      return forecastTime >= tomorrow && forecastTime.getHours() >= 12;
  });
  console.log(filteredForecasts);
}

