export class Weather {
  constructor(data) {
    this.name = data.name;
    this.temperture = data.main.temp;
    this.clicked = false;
  }
  //
  get Template() {
    return `
    
    <li>${this.name}</li>
    <li onclick="app.weatherController.toggleWeather()">${this.Conver}${
      this.clicked ? "C" : "F"
    }</li>
    
    

    `;
  }

  get Conver() {
    let out = 0;

    if (this.clicked) {
      let temperture = this.temperture;
      out = temperture - 273.15;
    } else {
      let t = this.temperture;
      out = 1.8 * (t - 273) + 32;
    }

    return Math.round(out);
  }
}
