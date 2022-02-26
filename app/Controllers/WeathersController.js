import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";

async function getWeather() {
  try {
    await weathersService.getWeather();
  } catch (error) {
    console.error(error);
  }
}

function _drawWeather() {
  let weather = ProxyState.weather;
  if (weather) {
    document.getElementById("weather").innerHTML = ProxyState.weather.Template;
  }
}

export class WeatherController {
  constructor() {
    console.log("hello from the weather controller");
    ProxyState.on("weather", _drawWeather);
    getWeather();
  }

  toggleWeather() {
    console.log("hello jerm");
    weathersService.toggleWeather();
  }
}
