let temp = document.getElementById("currentTemperature");
let weather = document.getElementById("currentWheaterImage") // spelling mistake in ID
let city = sessionStorage.getItem('city');
let weatherApi = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";

fetch(weatherApi)
    .then(results => results.json())
    .then(data => {
        console.log(data);
        temp.innerHTML = data.currentConditions.temp;
        let conditions = data.currentConditions.icon;
        if (conditions == "partly-cloudy-day"){
            weather.src = "icons8-partly-cloudy-day.gif";
        } else if (conditions == "snow"){
            weather.src = "icons8-light-snow.gif";
        }
        else if (conditions == "rain"){
            weather.src = "icons8-rain.gif";
        }
        else if (conditions == "fog"){
            weather.src = "icons8-haze.gif";
        }
        else if (conditions == "wind"){
            weather.src = "icons8-wind.gif";
        } else if (conditions == "cloudy"){
            weather.src = "icons8-partly-cloudy-day.gif";
        } else if (conditions == "partly-cloudy-night"){
            weather.src = "icons8-night.gif";
        } else if (conditions == "clear-day"){
            weather.src = "icons8-sun.gif";
        } else { //clear-night
            weather.src = "icons8-moon-and-stars.gif";
        }


    }
    )
    .catch(
        error => console.log(error)
    );