let background = document.getElementById("background");
let weather = document.getElementById("weather_current");
let weatherIcon = document.getElementById("weather_current_icon");
let forecastTomorrow = document.getElementById("forecast_tomorrow");
let forecastTomorrowIcon = document.getElementById("forecast_tomorrow_icon");
let forecastSecondDay = document.getElementById("forecast_2nd_day");
let forecastSecondIcon = document.getElementById("forecast_2nd_icon");
let forecastThirdDay = document.getElementById("forecast_3rd_day");
let forecastThirdIcon = document.getElementById("forecast_3rd_icon");
let forecastFourthDay = document.getElementById("forecast_4th_day");
let forecastFourthIcon = document.getElementById("forecast_4th_icon");
let forecastFifthDay = document.getElementById("forecast_5th_day");
let forecastFifthIcon = document.getElementById("forecast_5th_icon");
let rainyIcon = "Icons/Rainy_icon.png";
let cloudyIcon = "Icons/Cloudy_icon.png";
let thunderstormIcon = "Icons/Thunderstorm_icon.png";
let snowyIcon = "Icons/Snowy_icon.png";
let clearIcon = "Icons/Clear_icon.png";
let defaultIcon = "Icons/Default_icon.png";

weather.addEventListener("DOMSubtreeModified", function () {
  if (weather.innerHTML === "Rain" || weather.innerHTML === "Drizzle") {
    background.src = "Backgrounds/Rainy.jpg";
    weatherIcon.src = rainyIcon;
  } else if (weather.innerHTML === "Clouds") {
    background.src = "Backgrounds/Cloudy.jpg";
    weatherIcon.src = cloudyIcon;
  } else if (weather.innerHTML === "Thunderstorm") {
    background.src = "Backgrounds/Thunderstorm.jpg";
    weatherIcon.src = thunderstormIcon;
  } else if (weather.innerHTML === "Snow") {
    background.src = "Backgrounds/Snowy.jpg";
    weatherIcon.src = snowyIcon;
  } else if (weather.innerHTML === "Clear") {
    background.src = "Backgrounds/Clear.jpg";
    weatherIcon.src = clearIcon;
  } else {
    background.src = "Backgrounds/Default.jpg";
    weatherIcon.src = defaultIcon;
  }
});

forecastTomorrow.addEventListener("DOMSubtreeModified", function () {
  if (
    forecastTomorrow.innerHTML === "Rain" ||
    forecastTomorrow.innerHTML === "Drizzle"
  ) {
    forecastTomorrowIcon.src = rainyIcon;
  } else if (forecastTomorrow.innerHTML === "Clouds") {
    forecastTomorrowIcon.src = cloudyIcon;
  } else if (forecastTomorrow.innerHTML === "Thunderstorm") {
    forecastTomorrowIcon.src = thunderstormIcon;
  } else if (forecastTomorrow.innerHTML === "Snow") {
    forecastTomorrowIcon.src = snowyIcon;
  } else if (forecastTomorrow.innerHTML === "Clear") {
    forecastTomorrowIcon.src = clearIcon;
  } else {
    forecastTomorrowIcon.src = defaultIcon;
  }
});

forecastSecondDay.addEventListener("DOMSubtreeModified", function () {
  if (
    forecastSecondDay.innerHTML === "Rain" ||
    forecastSecondDay.innerHTML === "Drizzle"
  ) {
    forecastSecondIcon.src = rainyIcon;
  } else if (forecastSecondDay.innerHTML === "Clouds") {
    forecastSecondIcon.src = cloudyIcon;
  } else if (forecastSecondDay.innerHTML === "Thunderstorm") {
    forecastSecondIcon.src = thunderstormIcon;
  } else if (forecastSecondDay.innerHTML === "Snow") {
    forecastSecondIcon.src = snowyIcon;
  } else if (forecastSecondDay.innerHTML === "Clear") {
    forecastSecondIcon.src = clearIcon;
  } else {
    forecastSecondIcon.src = defaultIcon;
  }
});

forecastThirdDay.addEventListener("DOMSubtreeModified", function () {
  if (
    forecastThirdDay.innerHTML === "Rain" ||
    forecastThirdDay.innerHTML === "Drizzle"
  ) {
    forecastThirdIcon.src = rainyIcon;
  } else if (forecastThirdDay.innerHTML === "Clouds") {
    forecastThirdIcon.src = cloudyIcon;
  } else if (forecastThirdDay.innerHTML === "Thunderstorm") {
    forecastThirdIcon.src = thunderstormIcon;
  } else if (forecastThirdDay.innerHTML === "Snow") {
    forecastThirdIcon.src = snowyIcon;
  } else if (forecastThirdDay.innerHTML === "Clear") {
    forecastThirdIcon.src = clearIcon;
  } else {
    forecastThirdIcon.src = defaultIcon;
  }
});

forecastFourthDay.addEventListener("DOMSubtreeModified", function () {
  if (
    forecastFourthDay.innerHTML === "Rain" ||
    forecastFourthDay.innerHTML === "Drizzle"
  ) {
    forecastFourthIcon.src = rainyIcon;
  } else if (forecastFourthDay.innerHTML === "Clouds") {
    forecastFourthIcon.src = cloudyIcon;
  } else if (forecastFourthDay.innerHTML === "Thunderstorm") {
    forecastFourthIcon.src = thunderstormIcon;
  } else if (forecastFourthDay.innerHTML === "Snow") {
    forecastFourthIcon.src = snowyIcon;
  } else if (forecastFourthDay.innerHTML === "Clear") {
    forecastFourthIcon.src = clearIcon;
  } else {
    forecastFourthIcon.src = defaultIcon;
  }
});

forecastFifthDay.addEventListener("DOMSubtreeModified", function () {
  if (
    forecastFifthDay.innerHTML === "Rain" ||
    forecastFifthDay.innerHTML === "Drizzle"
  ) {
    forecastFifthIcon.src = rainyIcon;
  } else if (forecastFifthDay.innerHTML === "Clouds") {
    forecastFifthIcon.src = cloudyIcon;
  } else if (forecastFifthDay.innerHTML === "Thunderstorm") {
    forecastFifthIcon.src = thunderstormIcon;
  } else if (forecastFifthDay.innerHTML === "Snow") {
    forecastFifthIcon.src = snowyIcon;
  } else if (forecastFifthDay.innerHTML === "Clear") {
    forecastFifthIcon.src = clearIcon;
  } else {
    forecastFifthIcon.src = defaultIcon;
  }
});
