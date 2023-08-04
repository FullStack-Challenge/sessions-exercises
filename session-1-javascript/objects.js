// node init
// npm install node-fetch -y
import fetch from 'node-fetch';

/*
const OW = {
    OPEN_WEATHER_URL: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=",
    API_KEY: <api-key>,
    fetchData: async function() {
        const response = await fetch(`${this.OPEN_WEATHER_URL}${this.API_KEY}`);
        const json = await response.json();
        return json;
    }
}

const oW = Object.create(OW);
console.log(await oW.fetchData());*/



class Base {
    #region = "us" // private
    //environment = "dev"; // public
}

class OpenWeather extends Base {
    OPEN_WEATHER_URL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=";
    API_KEY = <api-key>;
    #environment = "qa";

    async fetchData() {
        const response = await fetch(`${this.OPEN_WEATHER_URL}${this.API_KEY}`);
        const json = await response.json();
        return json;
    }

    #getenv() {
        return `Environment: ${this.#environment}`;
    }

    get environment() {
        return `Environment: ${this.#getenv()}`;
    }
}

const openWeather = new OpenWeather();
console.log(openWeather.getEnv());
//console.log(await openWeather.fetchData());

