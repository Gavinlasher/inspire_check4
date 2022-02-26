import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherApi } from "./ApiService.js";

class WeatherService {
  async getWeather() {
    const res = await weatherApi.get();
    console.log(res.data, "thius should be the weather data");
    ProxyState.weather = new Weather(res.data);
  }

  toggleWeather() {
    ProxyState.weather.clicked = !ProxyState.weather.clicked;
    ProxyState.weather = ProxyState.weather;
  }
}

export const weathersService = new WeatherService();
