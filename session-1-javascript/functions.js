const MAXIMUM_CELSIUS = 40;
const MAXIMUM_WIND_SPEED = 200;
const countries = new Map();
    countries.set(
        "COLOMBIA",
        { windSpeed: Math.floor(Math.random() * MAXIMUM_WIND_SPEED), temperature: Math.floor(Math.random() * MAXIMUM_CELSIUS)}
    );
    countries.set(
        "SPAIN",
        { windSpeed: Math.floor(Math.random() * MAXIMUM_WIND_SPEED), temperature: Math.floor(Math.random() * MAXIMUM_CELSIUS)}
    );
    countries.set(
        "US",
        { windSpeed: Math.floor(Math.random() * MAXIMUM_WIND_SPEED), temperature: Math.floor(Math.random() * MAXIMUM_CELSIUS)}
    );

function getWeather(countryName) {
    let country = countries.get(countryName);
    console.log("Country: %s, Temperature: %dº, Wind speed: %s km/h", countryName, country.temperature, country.windSpeed);
}

getWeather("COLOMBIA");

const weather = function(countryName) {
    let country = countries.get(countryName);
    console.log("Country: %s, Temperature: %dº, Wind speed: %s km/h", countryName, country.temperature, country.windSpeed);
}

weather("SPAIN");

const arrowWeather = (countryName) => {
    let country = countries.get(countryName);
    console.log("Country: %s, Temperature: %dº, Wind speed: %s km/h", countryName, country.temperature, country.windSpeed);   
}

arrowWeather("US");

((countryName) => {
    let country = countries.get(countryName);
    console.log("Country: %s, Temperature: %dº, Wind speed: %s km/h", countryName, country.temperature, country.windSpeed);   
})("US");


// $("#logo").addEventListener('mousemove', function(){console.log(this);}); // google page search something - reload page
// $("#logo").addEventListener('mousemove', ()=>{console.log(this)});