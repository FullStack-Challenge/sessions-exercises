const MAXIMUM_CELSIUS = 40;
const MAXIMUM_WIND_SPEED = 200;

function getTemperature() {
    var countryWeather = "Colombia"; // example with double var declaration
    var windSpeed = Math.floor(Math.random() * MAXIMUM_WIND_SPEED);
    let countryTemperature = Math.floor(Math.random() * MAXIMUM_CELSIUS); // example with double let

    if (countryTemperature > 30) {
        var countryWeather = "Spain";
        let countryTemperature = 15.5;
        console.log("Country temperature: %dº", countryTemperature);
    }

    console.log(countryWeather);

    return {
        country: countryWeather,
        temperature: countryTemperature,
        windSpeed: windSpeed
    }
}

let country = getTemperature();
console.log("Country: %s, Temperature: %dº, Wind speed: %s km/h", country.country, country.temperature, country.windSpeed);
