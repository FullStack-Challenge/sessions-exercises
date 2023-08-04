const MAXIMUM_CELSIUS = 40;
const MAXIMUM_WIND_SPEED = 200;
const countries = new Set();
    countries.add("COLOMBIA");
    countries.add("COLOMBIA");
    countries.add("SPAIN");
    countries.add("US");


countries.forEach(country => {
    console.log("Country: %s", country);
});

console.log("==================================");

const arrayCountries = Array.of("COLOMBIA", "COLOMBIA", "SPAIN", "US");

arrayCountries.forEach(country => {
    console.log("Country: %s", country);
});

console.log("==================================");

console.log("Country: %s", arrayCountries[0]);