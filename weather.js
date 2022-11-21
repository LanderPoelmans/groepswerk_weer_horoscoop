
const weatherApi = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json"

fetch(weatherApi)
.then(results => results.json())
.then(
    output => document.getElementById("#").innerHTML = output
    )
.catch(
    error => console.log(error)
);