export default class OpenWeatherFacade {
    #OPEN_WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/";
    #API_KEY = "<api_key>";

    async works() {
        let testPath = "forecast?id=524901&appid=";
        let response = await fetch(`${this.OPEN_WEATHER_BASE_URL}${testPath}${this.API_KEY}`);
        let json = await response.json();
        return json;
    }

    fetchByCityName(city) {
        let cityPath = `weather?q=${city}&units=metric&appid=`;
        return fetch(`${this.#OPEN_WEATHER_BASE_URL}${cityPath}${this.#API_KEY}`);
    }
}
